/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: jiberico (https://sketchfab.com/jiberico)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-island-1312b62a91da4dc48fede10ca73f0ef5
Title: Low Poly Island
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from '../assets/3d/low_poly_island.glb'
import { a } from "@react-spring/three";

const BooIsland = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const islandRef = useRef();
    const { gl, viewport } = useThree()
    const { nodes, materials } = useGLTF(islandScene);
    const lastX = useRef(0);
    const rotationSpeed = useRef(0)
    const dampingFactor = 0.95
    const handlePointerDown = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setIsRotating(true)
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        lastX.current = clientX
    }
    const handlePointerUp = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setIsRotating(false)

    }
    const handlePointerMove = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX
            const delta = (clientX - lastX.current) / viewport.width
            islandRef.current.rotation.y += delta * 0.01 * Math.PI
            lastX.current = clientX
            rotationSpeed.current = delta * 0.01 * Math.PI
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            if (!isRotating) setIsRotating(true)
            islandRef.current.rotation.y += 0.01 * Math.PI
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) setIsRotating(true)
            islandRef.current.rotation.y -= 0.01 * Math.PI
        }
    }
    const handleKeyUp = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight')
            setIsRotating(false)
    }

    useEffect(() => {
        const canvas = gl.domElement
        canvas.addEventListener('pointerdown', handlePointerDown)
        canvas.addEventListener('pointerup', handlePointerUp)
        canvas.addEventListener('pointermove', handlePointerMove)
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown)
            canvas.removeEventListener('pointerup', handlePointerUp)
            canvas.removeEventListener('pointermove', handlePointerMove)
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [gl, handlePointerDown, handlePointerMove, handlePointerUp])

    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingFactor
            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0
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
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                    setCurrentStage(3);
                    break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                    setCurrentStage(4);
                    break;
                default:
                    setCurrentStage(null);
            }
        }
    })
    return (
        <a.group ref={islandRef} {...props}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.175}>
                <group position={[0.707, -0.487, 0.604]}>
                    <mesh
                        geometry={nodes.Island_Green_0.geometry}
                        material={materials.Material}
                    />
                    <mesh
                        geometry={nodes.Island_Green_1.geometry}
                        material={materials["Material.001"]}
                    />
                </group>
                <group position={[5.197, -1.832, 2.177]}>
                    <mesh
                        geometry={nodes.Tube_0.geometry}
                        material={materials["Material.002"]}
                    />
                    <mesh
                        geometry={nodes.Tube_1.geometry}
                        material={materials["Material.021"]}
                    />
                </group>
                <group position={[-4.008, 1.008, 4.929]}>
                    <mesh
                        geometry={nodes.Character1_0.geometry}
                        material={materials["Material.012"]}
                    />
                    <mesh
                        geometry={nodes.Character1_1.geometry}
                        material={materials["Material.013"]}
                    />
                </group>
                <group position={[-2.368, 1.769, 3.286]}>
                    <mesh
                        geometry={nodes.Character2_0.geometry}
                        material={materials["Material.014"]}
                    />
                    <mesh
                        geometry={nodes.Character2_1.geometry}
                        material={materials["Material.015"]}
                    />
                </group>
                <group position={[-0.413, -0.072, 5.386]}>
                    <mesh
                        geometry={nodes.End_flag_0.geometry}
                        material={materials["Material.007"]}
                    />
                    <mesh
                        geometry={nodes.End_flag_1.geometry}
                        material={materials["Material.008"]}
                    />
                    <mesh
                        geometry={nodes.End_flag_2.geometry}
                        material={materials["Material.023"]}
                    />
                    <mesh
                        geometry={nodes.End_flag_3.geometry}
                        material={materials["Material.018"]}
                    />
                </group>
                <group position={[3.135, 2.738, 5.787]}>
                    <mesh
                        geometry={nodes.Castle_0.geometry}
                        material={materials["Material.023"]}
                    />
                    <mesh
                        geometry={nodes.Castle_1.geometry}
                        material={materials["Material.011"]}
                    />
                </group>
                <group position={[0.424, -0.537, 1.448]}>
                    <mesh
                        geometry={nodes.Flower_0.geometry}
                        material={materials["Material.003"]}
                    />
                    <mesh
                        geometry={nodes.Flower_1.geometry}
                        material={materials["Material.004"]}
                    />
                    <mesh
                        geometry={nodes.Flower_2.geometry}
                        material={materials["Material.005"]}
                    />
                    <mesh
                        geometry={nodes.Flower_3.geometry}
                        material={materials["Material.006"]}
                    />
                </group>
                <group position={[-2.696, 0.979, 1.448]}>
                    <mesh
                        geometry={nodes.Flower001_0.geometry}
                        material={materials["Material.003"]}
                    />
                    <mesh
                        geometry={nodes.Flower001_1.geometry}
                        material={materials["Material.004"]}
                    />
                    <mesh
                        geometry={nodes.Flower001_2.geometry}
                        material={materials["Material.005"]}
                    />
                    <mesh
                        geometry={nodes.Flower001_3.geometry}
                        material={materials["Material.006"]}
                    />
                </group>
                <group position={[-4.673, 0.222, 1.448]}>
                    <mesh
                        geometry={nodes.Flower002_0.geometry}
                        material={materials["Material.003"]}
                    />
                    <mesh
                        geometry={nodes.Flower002_1.geometry}
                        material={materials["Material.004"]}
                    />
                    <mesh
                        geometry={nodes.Flower002_2.geometry}
                        material={materials["Material.005"]}
                    />
                    <mesh
                        geometry={nodes.Flower002_3.geometry}
                        material={materials["Material.006"]}
                    />
                </group>
                <group position={[5.533, -2.602, 1.448]}>
                    <mesh
                        geometry={nodes.Flower003_0.geometry}
                        material={materials["Material.003"]}
                    />
                    <mesh
                        geometry={nodes.Flower003_1.geometry}
                        material={materials["Material.004"]}
                    />
                    <mesh
                        geometry={nodes.Flower003_2.geometry}
                        material={materials["Material.005"]}
                    />
                    <mesh
                        geometry={nodes.Flower003_3.geometry}
                        material={materials["Material.006"]}
                    />
                </group>
                <group position={[0.36, -2.181, 3.755]}>
                    <mesh
                        geometry={nodes.Mistery_Brick_0.geometry}
                        material={materials["Material.017"]}
                    />
                    <mesh
                        geometry={nodes.Mistery_Brick_1.geometry}
                        material={materials["Material.022"]}
                    />
                </group>
                <group position={[3.72, -1.825, 1.97]}>
                    <mesh
                        geometry={nodes.Star_0.geometry}
                        material={materials["Material.024"]}
                    />
                    <mesh
                        geometry={nodes.Star_1.geometry}
                        material={materials["Material.017"]}
                    />
                </group>
                <group position={[-2.922, -3.59, 2.628]}>
                    <mesh
                        geometry={nodes.Boo_0.geometry}
                        material={materials["Material.029"]}
                    />
                    <mesh
                        geometry={nodes.Boo_1.geometry}
                        material={materials["Material.027"]}
                    />
                    <mesh
                        geometry={nodes.Boo_2.geometry}
                        material={materials["Material.028"]}
                    />
                </group>
                <mesh
                    geometry={nodes.Island_Base_0.geometry}
                    material={materials["Clay.001"]}
                    position={[0.759, -0.487, -3.867]}
                />
                <mesh
                    geometry={nodes.plant_0.geometry}
                    material={materials["Material.016"]}
                    position={[5.965, -2.637, 1.136]}
                />
                <mesh
                    geometry={nodes.plant2_0.geometry}
                    material={materials["Material.016"]}
                    position={[-5.771, 0.86, 1.136]}
                />
                <mesh
                    geometry={nodes.plant3_0.geometry}
                    material={materials["Material.016"]}
                    position={[-1.707, 0.365, 1.136]}
                />
                <mesh
                    geometry={nodes.plant4_0.geometry}
                    material={materials["Material.016"]}
                    position={[1.551, 0.247, 1.136]}
                />
                <mesh
                    geometry={nodes.plant5_0.geometry}
                    material={materials["Material.016"]}
                    position={[4.294, -0.775, 1.136]}
                />
                <mesh
                    geometry={nodes.Clouds_0.geometry}
                    material={materials["Material.019"]}
                    position={[0.679, 6.73, 1.515]}
                />
                <mesh
                    geometry={nodes.Bricks_0.geometry}
                    material={materials["Material.023"]}
                    position={[-0.635, -2.181, 3.755]}
                />
            </group>
        </a.group>
    );
}

export default BooIsland;
