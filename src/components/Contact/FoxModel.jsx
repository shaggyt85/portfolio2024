/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../../models";
import { Loader } from "../../components";
export const FoxModel = ({ currentAnimation }) => (
  <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
    <Canvas
      className=""
      camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} intensity={2.5} />
      <Suspense fallback={<Loader />}>
        <Fox
          position={[0.5, 0.35, 0]}
          rotation={[12.6, -0.6, 0]}
          scale={[0.5, 0.5, 0.5]}
          currentAnimation={currentAnimation}
        />
      </Suspense>
    </Canvas>
  </div>
);
