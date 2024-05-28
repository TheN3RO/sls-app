import React from 'react'

const ChessBoard = () => {



  const renderSquares = () => {
    const squares = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isBlack = (row + col) % 2 === 1;
        squares.push(
          <div
            key={`${row}-${col}`}
            className={`w-full h-full ${isBlack ? 'bg-chessDarkBlock' : 'bg-chessLightBlock'} aspect-square`}>
          </div>
        );
      }
    }
    return squares;
  }
  
  return (
    <div className='bg-black flex justify-center items-center py-32'>
      <div className='grid grid-cols-8 gap-0 w-full max-w-6xl aspect-square'>
        {renderSquares()}
      </div>
    </div>
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