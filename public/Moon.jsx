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

export function Moon(props) {
  const { nodes, materials } = useGLTF('/moon-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.defaultMaterial.geometry} material={materials.Material__50} rotation={[Math.PI / 2, 0, 0]} scale={2.00
        } />
      </group>
    </group>
  )
}

useGLTF.preload('/moon-transformed.glb')
