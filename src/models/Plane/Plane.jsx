/**
 * Componente Plane
 *
 * Este componente renderiza un modelo 3D de un avión utilizando la biblioteca react-three/drei.
 * El modelo 3D se carga desde un archivo .glb y se manejan las animaciones del modelo.
 *
 * @component
 * @param {Object} props - Las propiedades que se pasan al componente.
 * @param {boolean} props.isRotating - Indica si el avión debe estar rotando o no.
 */
/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import planeScene from "../../assets/3d/plane.glb";
import { AnimationHandler } from "./AnimationHandler";
export const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  return (
    <mesh {...props} ref={ref}>
      <AnimationHandler actions={actions} isRotating={isRotating} />
      <primitive object={scene} />
    </mesh>
  );
};
