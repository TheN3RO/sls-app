'use client';

import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from 'three';

useGLTF.preload('/chess_scene.glb');

const ChessModel = () => {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials, animations, scene } = useGLTF('/chess_scene.glb');
    const { actions, clips } = useAnimations(animations, group);
    const scroll = useScroll();

    const { camera } = useThree();

    useEffect(() => {
      camera.position.set(0, 40, 0);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
    }, [camera]);

    useEffect(() => {
      console.log(actions)
      //@ts-ignore
      actions["Take 01"].play().paused = true
    }, [])
    useFrame(
      () => {
        if (actions["Take 01"]) {
          //@ts-ignore
          actions["Take 01"].time = (actions["Take 01"].getClip().duration * scroll.offset) / 1
          camera.position.lerp(new THREE.Vector3(0, 40 - scroll.offset * 10, 0), 0.05);
          camera.lookAt(new THREE.Vector3(0, 0, 0));
        }
      }
    )

    return (
    <group ref={group}>
        <primitive object={scene} />
    </group>
  )
}

export default ChessModel