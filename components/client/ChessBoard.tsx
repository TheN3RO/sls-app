'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const ChessScene = dynamic(() => import('./chessAnimation'), { ssr: false }); 

const ChessBoard = () => {
  const [stage, setStage] = useState(1);

  const renderStageInfo = () => {
      //FIXME: edit the subtitles on stages
      const boxShadowStyle = 'box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;';
      
      switch (stage) {
        case 1:
          return <div className='min-h-64 rounded-lg mx-5 p-10 bg-black/75 text-white absolute top-10 left-0 w-[500px] shadow shadow-white'>
            <div className='text-4xl font-semibold'>Opening Moves</div>
            <p>Learn the basic strategies and tactics to get ahead in the opening moves of a chess game.</p>
          </div>;
        case 2:
          return <div className='min-h-64 rounded-lg mx-5 p-10 bg-black/75 text-white absolute top-1/2 right-0 transform -translate-y-1/2 w-[500px]'>
            <div className='text-4xl font-semibold'>Midgame Strategies</div>
            <p>Discover how to control the center of the board and develop your pieces in the midgame.</p>
          </div>;
        case 3:
          return <div className='min-h-64 rounded-lg mx-5 p-10 bg-black/75 text-white absolute bottom-10 left-0 w-[500px]' style={{ boxShadow: boxShadowStyle }}>
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

    // const renderSquares = () => {
  //   const squares = [];
  //   for (let row = 0; row < 8; row++) {
  //     for (let col = 0; col < 8; col++) {
  //       const isBlack = (row + col) % 2 === 1;
  //       squares.push(
  //         <div
  //           key={`${row}-${col}`}
  //           className={`w-full h-full ${isBlack ? 'bg-chessDarkBlock' : 'bg-chessLightBlock'} aspect-square`}>
  //         </div>
  //       );
  //     }
  //   }
  //   return squares;
  // }
  
  // return (
  //   <div className='bg-black flex justify-center items-center py-32'>
  //     <div className='grid grid-cols-8 gap-0 w-full max-w-6xl aspect-square'>
  //       {renderSquares()}
  //     </div>
  //   </div>
  // )
}

export default ChessBoard