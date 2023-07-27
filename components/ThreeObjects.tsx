'use client'
import * as THREE from "three"
import {Canvas, useFrame} from '@react-three/fiber'
import React, { useRef,Suspense,useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Save50 } from "./Save50"
import { Invest20 } from "./Invest20"
import { Want30 } from "./Want30"

export function ThreeObjects()
{
    // const [invest20Pos, updateInvest20Pos] = useState([-5, 0,0]) 

    const investSection = useRef<any>(null);
    const saveSection = useRef<THREE.Group>(null);
    const wantSection = useRef<THREE.Group>(null);

    const [investTargetPos, setInvestTargetPos] = useState<THREE.Vector3>(new THREE.Vector3(0, -0.15, -5))

    const lerpSpeed = 0.1;

    useFrame(()=>
    {
        investSection.current?.position.lerp(investTargetPos, lerpSpeed)
    })
    //-5, 0,0
    return (
        <>
            <Invest20 ref={investSection} position={[5, -2,0]} scale={1.2} rotation={[0,-Math.PI/2,Math.PI/2]}/>
            <Save50 ref={saveSection} position={[-0.2,0,-5]} scale={1.2} rotation={[0,-Math.PI/2,Math.PI/2]}/>
            <Want30 ref={wantSection} position={[0.1,0.15,-5]}scale={1.2}  rotation={[0,-Math.PI/2,Math.PI/2]}/>
        </>
    )
}