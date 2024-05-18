import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const UserInteraction = ({
  setCurrentStage,
  isRotating,
  setIsRotating,
  islandRef,
  viewport,
  gl,
}) => {
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };
  // sin repetir tanto código
  const handleMovement = (clientX) => {
    const delta = (clientX - lastX.current) / viewport.width;
    islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.01 * Math.PI;
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      handleMovement(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      handleMovement(e.clientX);
    }
  };
  // Prueba simple separando las interacciones
  // const handleMouseMove = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   if (isRotating) {
  //     const clientX = e.clientX;
  //     const delta = (clientX - lastX.current) / viewport.width;
  //     islandRef.current.rotation.y += delta * 0.01 * Math.PI;
  //     lastX.current = clientX;
  //     rotationSpeed.current = delta * 0.01 * Math.PI;
  //   }
  // };
  // const handleTouchMove = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   if (isRotating) {
  //     const clientX = e.touches[0].clientX;
  //     const delta = (clientX - lastX.current) / viewport.width;
  //     islandRef.current.rotation.y += delta * 0.01 * Math.PI;
  //     lastX.current = clientX;
  //     rotationSpeed.current = delta * 0.01 * Math.PI;
  //   }
  // };
  // const handlePointerMove = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   if (isRotating) {
  //     const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  //     const delta = (clientX - lastX.current) / viewport.width;
  //     islandRef.current.rotation.y += delta * 0.01 * Math.PI;
  //     lastX.current = clientX;
  //     rotationSpeed.current = delta * 0.01 * Math.PI;
  //   }
  // };
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  };
  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") setIsRotating(false);
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    // canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      // canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("touchmove", handleTouchMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, handlePointerDown, handlePointerUp]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.85 && normalizedRotation <= 6.35:
          setCurrentStage(1);
          break;
        case normalizedRotation >= 4.5 && normalizedRotation <= 5.1:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 3 && normalizedRotation <= 3.5:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 1 && normalizedRotation <= 1.5:
          setCurrentStage(4);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });
};
