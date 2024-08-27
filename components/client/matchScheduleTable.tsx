import { Player } from '@/types/team';
import styles from '@/styles/MatchScheduleTable.module.css';
import React from 'react'
import { FaChessBoard } from 'react-icons/fa';
import { FaRegChessKing, FaRegChessQueen } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Avatar } from '@chakra-ui/react';

interface Props {
    meetingMatches: [Player, Player][][][]
}

const tableVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
		},
	}),
};

const MatchScheduleTable: React.FC<Props> = ({meetingMatches}) => {
	return (
		<table className={`bg-neutral-950 ${styles.table}`} >
			<thead>
				<tr className={`bg-black text-white sticky top-0 ${styles.tableBar}`}>
					<td className='py-3'>RUNDA</td>
					<td className='py-3'><FaChessBoard className='mx-auto' /></td>
					<td className='py-3'>KOLOR</td>
					<td className={`py-3 ${styles.playerColumn}`}>ZAWODNIK</td>
					<td className={`py-3 ${styles.playerColumn}`}>WYNIK</td>
					<td></td>
					<td className={`py-3 ${styles.playerColumn}`}>WYNIK</td>
					<td className={`py-3 ${styles.playerColumn}`}>ZAWODNIK</td>
					<td className='py-3'>KOLOR</td>
				</tr>
			</thead>
			{meetingMatches.map(roundMatches => (
				roundMatches.map((matches, roundIndex) => (
					<tbody key={`round-${roundIndex}`}
					className='border-collapse text-gray-200 border border-slate-500 divide-y divide-dashed divide-gray-400'>
						{matches.map((match, matchIndex) => (
							<motion.tr 
								key={`round-${roundIndex}-match-${matchIndex}`}
								custom={matchIndex}
								initial="hidden"
								animate="visible"
								variants={tableVariants}								>
								{matchIndex === 0 && <td rowSpan={matches.length} className='text-center border border-gray-500 bg-[url("/background/dark-grid-pattern.jpg")]' style={{boxShadow: "-30px 0px 43px -9px rgba(78, 78, 97, 1)"}}>
									<span className='text-4xl p-4 text-white'>{roundIndex + 1}</span>
								</td>}
								<td className='text-center text-lg'>{matchIndex + 1}</td>
								<td className='bg-white w-[20px] m-2 border border-gray-700'>
									<FaRegChessKing className='text-black mx-auto'/>
								</td>
								<td className='flex'>
									<Avatar name='Dan Abrahmov' size='sm' className='mx-5' />
									<span className='flex-grow my-auto text-center'>{`${match[0].name} ${match[0].surname}`}</span>
								</td>
								<td className='text-center'>-</td>
								<td className='text-center'>{'vs'}</td>
								<td className='text-center'>-</td>
								<td className="flex">
									<span className='flex-grow my-auto text-center'>{`${match[1].name} ${match[1].surname}`}</span>
									<Avatar name='Dan Abrahmov' size='sm' className='mx-5' />
								</td>
								<td className='bg-black w-[20px]  m-2 border border-gray-300'>
									<FaRegChessQueen className='text-white mx-auto'/>
								</td>
							</motion.tr>
						))}
					</tbody>
				))
			))}
		</table>
	);
}

export default MatchScheduleTable