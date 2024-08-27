'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, ScrollControls, useProgress } from '@react-three/drei';
import ChessModel from './chessModel';
import { ChessModelProps } from '@/types';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

const ChessAnimation: React.FC<ChessModelProps> = ({ stage, setStage }) => {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 100, 10]} intensity={5} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.2} pages={2}>
          <ChessModel stage={stage} setStage={setStage} />
        </ScrollControls>
      </Suspense>
      <Html fullscreen>
      </Html>
    </Canvas>
  );
};

export default ChessAnimation;
