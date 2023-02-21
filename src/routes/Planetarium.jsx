import './Planetarium.css'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Model } from '../../public/Earth'
import { Moon } from '../../public/Moon'

export default function Planetarium(){
    return(
        <div id='canvascontainer'>
            <Canvas id='three-canvas'>
            <Suspense fallback={null}>
                
                {/* Camera */}
                <PerspectiveCamera makeDefault position={[0,0,5]}/>
                <OrbitControls enablePan={false} enableZoom={false}/>
                <Model/>
                <directionalLight args={["#ffffff", 1]}/>
                <ambientLight args={["#ffffff", 0.1]}/>
            </Suspense>
            </Canvas>
        </div>
    )
}