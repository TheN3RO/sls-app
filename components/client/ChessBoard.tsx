'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const ChessScene = dynamic(() => import('./chessAnimation'), { ssr: false }); 

const ChessBoard = () => {
  const [stage, setStage] = useState(1);

  const renderStageInfo = () => {
      //FIXME: edit the subtitles on stages      
      switch (stage) {
        case 1:
          return <div className='min-h-64 min-w-48 max-w-[500px] rounded-lg mx-5 p-10 bg-black/75 text-white absolute top-10 left-0 shadow shadow-white'>
            <div className='text-4xl font-semibold'>Opening Moves</div>
            <p>Learn the basic strategies and tactics to get ahead in the opening moves of a chess game.</p>
          </div>;
        case 2:
          return <div className='min-h-64 min-w-48 max-w-[500px] rounded-lg mx-5 p-10 bg-black/75 text-white absolute top-1/2 right-0 transform -translate-y-1/2 shadow shadow-white'>
            <div className='text-4xl font-semibold'>Midgame Strategies</div>
            <p>Discover how to control the center of the board and develop your pieces in the midgame.</p>
          </div>;
        case 3:
          return <div className='min-h-64 min-w-48 max-w-[500px] rounded-lg mx-5 p-10 bg-black/75 text-white absolute bottom-10 left-0 shadow shadow-white'>
            <div className='text-4xl font-semibold'>Endgame Tactics</div>
            <p>Master the endgame by learning how to promote pawns, checkmate with a king and rook, and more.</p>
          </div>;
        default:
          return null;
      }
  };

  return (
    <section className='bg-black relative'>
      <div className='h-[1000px]'>
        <ChessScene stage={stage} setStage={setStage} />
      </div>
      {renderStageInfo()}
    </section>
  )
}

export default ChessBoard