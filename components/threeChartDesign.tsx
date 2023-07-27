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

export function ThreePieChart(props:any)
{

    // const [invest20Pos, updateInvest20Pos] = useState([-5, 0,0]) 
    // //
    // useFrame(()=>
    // {



    // })

    return (
            <Canvas className={props.className}  frameloop="demand"   camera={{ zoom: 10, position: [0, 20, 100] }}>
              
              <ambientLight intensity={0.1}></ambientLight>
              <pointLight intensity={3} color="#cc00cc"position={[10, 10, -10]} />

              <pointLight intensity={1} color="lightblue" position={[20, -20, 10]} />
              <pointLight intensity={2} color="#cc00cc" position={[-15, -5, 20]} />
              <pointLight intensity={2} color="lightblue" position={[-10, 10, 10]} />

                <Suspense fallback={null}>
                    <ThreeObjects/>

                  {/* <Model scale={9} pos={[0,-8,-5]} rotation={[0,Math.PI/2,0]} />
                    */}
                </Suspense>
            </Canvas>
    )
}