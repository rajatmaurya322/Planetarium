/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 moon.glb -T --shadows
Author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/the-moon-9916fcec59f04b07b3e8d7f077dc3ded
Title: The Moon
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function RotatingMoon(props){
  const moonmesh = React.useRef();

  useFrame(({clock})=>{
    const a = clock.getElapsedTime();
    moonmesh.current.rotation.z = a * 1.9;
    moonmesh.current.position.x = Math.cos(a * 2.05) *  4.25;
    moonmesh.current.position.y = Math.sin(a * 2.05) *  4.25;
    moonmesh.current.position.z = Math.sin(a * 2.05) ; 
  })

  const { nodes, materials } = useGLTF('/moon-transformed.glb')
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0 , 0]}>
        <mesh ref={moonmesh} castShadow receiveShadow geometry={nodes.defaultMaterial.geometry} material={materials.Material__50} position={[3.45,0,0]} scale={0.4} />
      </group>
    </group>
  )
}

useGLTF.preload('/moon-transformed.glb')
