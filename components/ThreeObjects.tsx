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
    const saveSection = useRef<any>(null);
    const wantSection = useRef<any>(null);

    const [investTargetPos, setInvestTargetPos] = useState<THREE.Vector3>(new THREE.Vector3(0, 4.75,-13))
    const [saveTargetPos, setSaveTargetPos] = useState<THREE.Vector3>(new THREE.Vector3(-0.2,5,-13))
    const [wantTargetPos, setWantTargetPos] = useState<THREE.Vector3>(new THREE.Vector3(0.1,5.2,-13))

    const lerpSpeed = 1.5;

   

    useFrame((state, delta)=>
    {
        console.log(delta)
        investSection.current.position.lerp(investTargetPos, lerpSpeed*delta) 
        saveSection.current.position.lerp(saveTargetPos, lerpSpeed*delta) 
        wantSection.current.position.lerp(wantTargetPos, lerpSpeed*delta) 
    })
    //-5, 0,0
    return (
        <>
            <Invest20 ref={investSection} position={[5,0,2]} scale={1.2} rotation={[0,-Math.PI/2,Math.PI/2]}/>
            <Save50 ref={saveSection} position={[-6.2,0,4]} scale={1.2} rotation={[0,-Math.PI/2,Math.PI/2]}/>
            <Want30 ref={wantSection} position={[5,0,8]} scale={1.2}  rotation={[0,-Math.PI/2,Math.PI/2]}/>
        </>
    )
}