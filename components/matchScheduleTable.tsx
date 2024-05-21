import { Player } from '@/types/team';
import styles from '@/styles/MatchScheduleTable.module.css';
import React from 'react'

interface Props {
    meetingMatches: [Player, Player][][][]
}

const MatchScheduleTable: React.FC<Props> = ({meetingMatches}) => {
    return (
        <div>
            <table className={styles.table} >
                <thead>
                    <tr>
                        <td>Runda</td>
                        <td className='w-[100px]'>Stanowisko</td>
                        <td>Kolor</td>
                        <td className={styles.playerColumn}>Zawodnik</td>
                        <td></td>
                        <td className={styles.playerColumn}>Zawodnik</td>
                        <td>Kolor</td>
                    </tr>
                </thead>
                    {meetingMatches.map(roundMatches => (
                        roundMatches.map((matches, roundIndex) => (
                            <tbody className='border-collapse border border-slate-500 divide-y divide-dashed'>
                            {matches.map((match, matchIndex) => (
                                <tr key={`round-${roundIndex}-match-${matchIndex}`}>
                                    {matchIndex === 0 && <td rowSpan={matches.length} className='text-center border border-gray-500 bg-black'><span className='text-4xl p-4 border border-gray-900 rounded-full'>{roundIndex + 1}</span></td>}
                                    <td className='text-center text-lg'>{matchIndex + 1}</td>
                                    <td className='bg-white w-[20px] m-2 border border-gray-700'></td>
                                    <td className={styles.playerColumn}>{`${match[0].name} ${match[0].surname}`}</td>
                                    <td>{'vs'}</td>
                                    <td className={styles.playerColumn}>{`${match[1].name} ${match[1].surname}`}</td>
                                    <td className='bg-black w-[20px]  m-2 border border-gray-300'></td>
                                </tr>
                            ))}
                            </tbody>
                        ))
                    ))}
            </table>
        </div>
    );
}

export default MatchScheduleTable