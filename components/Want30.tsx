/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 ./assets/want30.gltf -t 
*/

import * as THREE from 'three'
import React, { useRef,forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['30wants']: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export const Want30 =  forwardRef(function Want30(props: JSX.IntrinsicElements['group'],ref:any) {
  const { nodes, materials } = useGLTF('/want30.gltf') as GLTFResult
  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh geometry={nodes['30wants'].geometry} material={materials['Material.002']} position={[0.008, -0.004, -0.55]} rotation={[-Math.PI, 0, -Math.PI]} scale={[5, 0.132, 5]} />
    </group>
  )
})

useGLTF.preload('/want30.gltf')
