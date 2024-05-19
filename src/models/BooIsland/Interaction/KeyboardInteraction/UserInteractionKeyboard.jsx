import { useRef } from "react";
import { KeyboardInteraction } from "./KeyboardInteraction";

export const UserInteractionKeyboard = ({
  isRotating,
  setIsRotating,
  islandRef,
}) => {
  const rotationSpeed = useRef(0);
  // ...resto del código...

  const handleKeyPress = (e) => {
    // manejar la presión de teclas aquí
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

  const handleKeyRelease = (e) => {
    // manejar la liberación de teclas aquí
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") setIsRotating(false);
  };

  return (
    <>
      <KeyboardInteraction
        onKeyPress={handleKeyPress}
        onKeyRelease={handleKeyRelease}
      />
      {/* ...resto del JSX... */}
    </>
  );
};
