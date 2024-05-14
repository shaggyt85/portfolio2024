/**
 * Componente SkinnedMesh
 *
 * Este componente renderiza un objeto SkinnedMesh en una escena 3D utilizando la biblioteca react-three/drei.
 * Un SkinnedMesh es un objeto 3D que puede ser deformado y animado.
 *
 * @component
 * @param {Object} props - Las propiedades que se pasan al componente.
 * @param {string} props.name - El nombre del objeto SkinnedMesh.
 * @param {Object} props.nodes - Los nodos del modelo 3D que contienen la geometría y el esqueleto del objeto SkinnedMesh.
 * @param {Object} props.materials - Los materiales del modelo 3D que se aplicarán al objeto SkinnedMesh.
 * @example
 * return (
 *   <SkinnedMesh name="Object_7" nodes={nodes} materials={materials} />
 * )
 */
/* eslint-disable react/no-unknown-property */
export const SkinnedMesh = ({ name, nodes, materials }) => (
  <skinnedMesh
    name={name}
    geometry={nodes[name].geometry}
    material={materials.PaletteMaterial001}
    skeleton={nodes[name].skeleton}
  />
);
