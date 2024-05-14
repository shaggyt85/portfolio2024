/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: jiberico (https://sketchfab.com/jiberico)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-island-1312b62a91da4dc48fede10ca73f0ef5
Title: Low Poly Island
*/
import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { UserInteraction } from "./UserInteraction";
import islandScene from "../../assets/3d/low_poly_island.glb";
import { Island } from "./Island";
export const BooIsland = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) => {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  return (
    <>
      <UserInteraction
        setIsRotating={setIsRotating}
        islandRef={islandRef}
        viewport={viewport}
        gl={gl}
        isRotating={isRotating}
        setCurrentStage={setCurrentStage}
      />
      <Island
        nodes={nodes}
        materials={materials}
        islandRef={islandRef}
        {...props}
      />
    </>
  );
};