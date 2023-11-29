import {React, useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber'


const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef();
 
    // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
    useFrame((_, delta)=>{
        if(isRotating){
            skyRef.current.rotation.y += 0.15*delta
        }
    })
  return (
    <mesh ref ={skyRef}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky