/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 ./assets/invest20.gltf -t 
*/

import * as THREE from 'three'
import React, { useRef , forwardRef} from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['20Invest']: THREE.Mesh
  }
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial
  }
}

export const Invest20 = forwardRef(function Invest20(props: JSX.IntrinsicElements['group'], ref:any)  {
  const { nodes, materials } = useGLTF('/invest20.gltf') as GLTFResult
  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh geometry={nodes['20Invest'].geometry} material={materials['Material.003']} position={[-0.046, -0.006, -0.506]} rotation={[-Math.PI, 0, -Math.PI]} scale={[5, 0.132, 5]} />
    </group>
  )
})

useGLTF.preload('/invest20.gltf')
