import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const RotationHandler = ({ isRotating, islandRef }) => {
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    }
  });

  return null;
};
