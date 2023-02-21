/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 earth.glb --shadows
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-f7a76c63ff1846afb2d606e5c8369c15
Title: Earth
*/

import React from 'react'
import { Html, useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/earth.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={1.98} />
      <Html scale={0.3} position={[2.5,0,0]} transform occlude>
          <div className="annotation">This is a annotation</div>
      </Html>
    </group>
  )
}

useGLTF.preload('/earth.glb')