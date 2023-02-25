import './Planetarium.css'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { RotatingEarth } from '../../public/Earth'
import { RotatingMoon } from '../../public/Moon'
import { Mercury } from '../../public/Mercury'
import { Jupiter } from '../../public/Jupiter'
import { Mars } from '../../public/Mars'


export default function Planetarium(){
    const [index, setIndex] = useState(1) ;
    let rendermodel ;
    if (index == 1) {
        rendermodel = 
        <>
        <Html fullscreen>
            <div id='facts'>
            Earth: Earth is the third planet from the Sun and <br /> the only place known in the universe where <br /> life has originated and found habitability. <br /><br />
            Mass:    5.972168 x 10^24 kg <br />
            Volume:	 1.08321 x 10^12 km3<br />
            Circumference: 40075.017 km<br />
            Average orbital speed: 29.7827 km/s <br />
            Satellites: 1 natural satellite- Moon
            </div>
        </Html>
        <RotatingEarth/>
        <RotatingMoon/>; 
        </>
    }
    else if(index == 2){
        rendermodel = 
        <>
        <Html fullscreen>
            <div id='facts'>
            Mercury is the smallest planet in the Solar System <br /> and the closest to the Sun. Its orbit around the <br /> Sun takes 87.97 Earth days, the shortest of all <br /> the Sun's planets.Mercury is a rocky planet, <br /> also known as a terrestrial planet. Mercury has a<br /> solid, cratered surface, much like the Earth's moon.<br /> <br />
            Mass: 3.285 x 10^23 kg <br />
            Volume:	6.083 x 10^10 km3<br />
            Circumference: 15,329 km<br />
            Average orbital speed: 47.36 km/s <br />
            Satellites: No Natural moon  
            </div>
        </Html>
        <Mercury/>
        </>
    }
    else if(index ==3){
        rendermodel=
        <>
        <Html fullscreen>
            <div id='facts'>
            Jupiter is the fifth planet from the Sun and the <br /> largest in the Solar System. It is a gas giant <br /> with a mass  more than two and a half times that  of <br /> all the  other planets in the Solar System combined. <br /><br />
            Mass: 1.8982 x 10^27 kg <br />
            Volume:	1.4313 x 10^15 km3 <br />
            Circumference: 439,264 km<br />
            Average orbital speed: 	13.07 km/s <br />
            Satellites: About 80 natural Satellites 
            </div>
        </Html>
        <Jupiter/>
        </>
    }
    else if(index ==4){
        rendermodel=
        <>
        <Html fullscreen>
            <div id='facts'>
            Mars is the fourth planet from the Sun and <br /> the second-smallest planet in the Solar System, <br /> larger only than Mercury. Mars is a terrestrial planet  <br /> with a thin atmosphere and has a crust <br /> primarily composed of elements similar to Earth's crust,
            <br /> as well as a core made of iron and nickel. <br /> <br />
            Mass: 6.4171 x 10^23 kg <br />
            Volume:	1.63118 x 10^11 km3 <br />
            Circumference: 21,344 km <br />
            Average orbital speed:	24.07 km/s <br />
            Satellites: Two natural Satellites- Phobos and Diemos
            </div>
        </Html>
        <Mars/>
        </>
    }

    return(
        <div id='canvascontainer'>
            <Canvas id='three-canvas'>
            <Suspense fallback={null}>
                {/* Camera */}
                <PerspectiveCamera makeDefault position={[0,0,5]}/>
                <OrbitControls enablePan={false} enableZoom={true}/>
                {rendermodel}
                <Html>
                    <button id='planetSelector' >Explore
                        <div id='planetSelector-dropdown'>
                        <div onClick={()=>setIndex(1)}>Earth</div>
                        <div onClick={()=>setIndex(2)}>Mercury</div>
                        <div onClick={()=>setIndex(3)}>Jupiter</div>
                        <div onClick={()=>setIndex(4)}>Mars</div>
                        </div>
                    </button>
                </Html>
                <directionalLight position={[4, 0 ,0]} args={["#ffffff", 1]}/>
                <ambientLight args={["#ffffff", 0.1]}/>
            </Suspense>
            </Canvas>
        </div>
    )
}