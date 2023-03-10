/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 mars.glb -T --shadows
Author: JanesBT (https://sketchfab.com/JanesBt)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mars-6f9ebc64e6c74068a8412a7dd74dfb96
Title: Mars
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Mars(props) {
  const marsmesh = React.useRef();

  useFrame(({clock})=>{
    const a = clock.getElapsedTime();
    marsmesh.current.rotation.z = a * 1.8;
  })

  const { nodes, materials } = useGLTF('/mars-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh ref={marsmesh} castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/mars-transformed.glb')
