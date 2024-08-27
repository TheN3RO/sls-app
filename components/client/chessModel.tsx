'use client';

import { ChessModelProps } from "@/types";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from 'three';

useGLTF.preload('/chess_scene.glb');

const ChessModel: React.FC<ChessModelProps> = ({ stage, setStage }) => {
  const group = useRef<THREE.Group>(null);
  const { animations, scene } = useGLTF('/chess_scene.glb'); // Removed 'nodes' and 'materials'
  const { actions } = useAnimations(animations, group); // Removed 'clips'
  const scroll = useScroll();

    const { camera } = useThree();

    useEffect(() => {
      camera.position.set(0, 40, 0);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
    }, [camera]);

    useEffect(() => {
      //@ts-ignore
      actions["Take 01"].play().paused = true
    }, [])
    useFrame(() => {
        if (actions["Take 01"]) {
          //@ts-ignore
          const duration = actions["Take 01"].getClip().duration;
          const offset = scroll.offset;
          actions["Take 01"].time = (duration * offset) / 1;
          
          // Determine current stage
          let newStage = 1;
          if (offset < 0.4) {
            newStage = 1;
          } else if (offset < 0.8) {
            newStage = 2;
          } else {
            newStage = 3;
          }
          
          // Set the stage if it has changed
          if (newStage !== stage) {
            setStage(newStage);
          }
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