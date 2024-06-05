'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ChessModel from './chessModel';
import { Html, ScrollControls, useProgress } from '@react-three/drei';

function Loader() {
	const { progress, active } = useProgress();

	return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

const ChessAnimation = () => {
	return (
		<Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
			<ambientLight intensity={0.5} />
			<directionalLight position={[10, 100, 10]} intensity={5} />
			<Suspense fallback={<Loader />}>
				<ScrollControls damping={0.2} pages={2}>
					<ChessModel />
				</ScrollControls>
			</Suspense>
		</Canvas>
	);
};

export default ChessAnimation;
