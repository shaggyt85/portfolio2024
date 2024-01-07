/* eslint-disable react/no-unknown-property */
import { useState, Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import BooIsland from '../models/BooIsland'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
    Popup
</div> */}

const Root = () => {
    const [isRotating, setIsRotating] = useState(false)
    const adjustIslandForScreenSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43]
        let rotation = [0.1, 0, 0 ]
        if(window.innerWidth <= 768){
            screenScale=[13, 13, 13]
        }else{
            screenScale=[20, 20, 20]
            screenPosition = [0, -6.5, -43]
            rotation = [0.1, 0, 0 ]
        }
        return [screenScale, screenPosition, rotation]
    }
    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition
        if(window.innerWidth <= 768){
            screenScale=[1.5, 1.5, 1.5]
            screenPosition = [0, -1.5, 0]
        }else{
            screenScale=[3, 3, 3]
            screenPosition = [4, -4, -4]
        }
        return [screenScale, screenPosition]
    }
    const [isPlaneScale, isPlanePosition] = adjustPlaneForScreenSize()
    const [isBooIslandScale, isBooIslandPosition, isBooIslandRotation] = adjustIslandForScreenSize()
  return (
    <section className="w-full h-screen relative">
        <Canvas className={`w-full  h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`} camera={{ near: 0.1, far: 1000}}>
            <Suspense fallback={<Loader />}>
                <directionalLight position={[7,2,1]} intensity={2}/>
                <ambientLight intensity={0.8}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                <Sky />
                <BooIsland position={isBooIslandPosition} scale={isBooIslandScale} rotation={isBooIslandRotation} isRotating={isRotating} setIsRotating={setIsRotating} />
                <Plane isRotation={isRotating} rotation={[0, 20, 0]} position={isPlanePosition} scale={isPlaneScale}/>
                </ Suspense>
        </Canvas>
    </section>
  )
}

export default Root