'use client'
import * as THREE from "three"
import {Canvas, useFrame} from '@react-three/fiber'
import React, { useRef,Suspense,useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Save50 } from "./Save50"
import { Invest20 } from "./Invest20"
import { Want30 } from "./Want30"
import {ThreeObjects} from './ThreeObjects'

import {Lighting} from './Lighting'

function Box(props:any) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}>
      <boxBufferGeometry />
    </mesh>
  );
}
export function ThreePieChart(props:any)
{

    // const [invest20Pos, updateInvest20Pos] = useState([-5, 0,0]) 
    // //
    // useFrame(()=>
    // {



    // })

    return (
            <Canvas className={props.className}    camera={{ zoom: 1, position: [0, 0, 5] }}>
              
              <ambientLight color="lightblue"intensity={0.1}></ambientLight>
                {/* <pointLight intensity={1} color="#cc00cc"position={[10, 10, -3]} /> */}
                {/* <pointLight intensity={1} color="#cc00cc"position={[10, 10, 5]} /> */}
                {/* <Save50 scale={1.2} rotation={[0,-Math.PI/2,Math.PI/2]} position={[-10, 10, 5]}/> */}
                {/* <pointLight intensity={1} color="lightblue" position={[7.5, -20, 20]} /> */}
                {/* <pointLight intensity={0.5} color="cc00cc" position={[10, 0, 10]} /> */}
                <Lighting/>
                <Suspense fallback={null}>
                    <ThreeObjects/>

                  {/* <Model scale={9} pos={[0,-8,-5]} rotation={[0,Math.PI/2,0]} />
                    */}
                </Suspense>
            </Canvas>
    )
}