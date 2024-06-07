import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { BooIsland, Sky, Plane } from "../models";
import { HomeInfo, LightSetup, Loader } from "../components";
import { AdjustForScreenSize } from "../utils";

export const Root = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const isPlaneScale = AdjustForScreenSize([1.5, 1.5, 1.5], [2, 2, 2]);
  const isPlanePosition = [0, -1.5, 0];

  const isBooIslandScale = AdjustForScreenSize([13, 13, 13], [20, 20, 20]);
  const isBooIslandPosition = [0, -6.5, -43];
  const isBooIslandRotation = [0.1, 0, 0];

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full  h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <LightSetup />
          <Sky isRotating={isRotating} />
          <BooIsland
            position={isBooIslandPosition}
            scale={isBooIslandScale}
            rotation={isBooIslandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            rotation={[0, 20, 0]}
            position={isPlanePosition}
            scale={isPlaneScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
