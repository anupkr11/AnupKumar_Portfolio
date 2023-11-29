import {React, useEffect, useRef} from 'react'
import planeScene from "../assets/3d/plane.glb"
import { useAnimations, useGLTF } from '@react-three/drei'

//we are speading the props bcz to use in mesh
const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(planeScene);
    const {actions} = useAnimations(animations,ref);

    // Use an effect to control the plane's animation based on 'isRotating'
    useEffect(() => {
        if(isRotating){
            actions['Take 001'].play();
        }
        else{
            actions['Take 001'].stop();
        }
    }, [actions, isRotating])
  return (
    <mesh {...props} ref={ref}>
    {/* use the primitive element when you want to directly embed a complex 3D
      model or scene */}
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane