import { useFrame } from "@react-three/fiber";

export const StageSetter = ({ isRotating, setCurrentStage, islandRef }) => {
  useFrame(() => {
    if (isRotating) {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.85 && normalizedRotation <= 6.35:
          setCurrentStage(5);
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

  return null;
};
