import clsx from 'clsx'
import keyLetters from '../data/keyLetters.json'
import { motion } from 'framer-motion'

const Letters = keyLetters as string[]

interface KeyboardType {
    handleUserWord: (letter: string) => void,
    rndWord: string,
    userLetter: string[],
    gameStatus: 'onGoing' | 'lost' | 'won'
}

const Keyboard = ({ handleUserWord, rndWord, userLetter, gameStatus }: KeyboardType) => {

    return (

        <div className={clsx('mb-6 grid justify-center grid-cols-[repeat(7,minmax(10px,50px))] md:grid-cols-[repeat(9,minmax(30px,70px))] lg:grid-cols-[repeat(13,minmax(30px,70px))] gap-1.5 md:gap-2 lg:mt-5',
            gameStatus === 'lost' && 'overflow-hidden'
        )}>
            {
                Letters.map(letter => {
                    const isUsed = userLetter.includes(letter)
                    const isWrong = userLetter.includes(letter) && !rndWord.split('').includes(letter)
                    const randomX = Math.random() * 100 - 50;
                    const randomDelay = Math.random() * 1.5;
                    const randomDuration = 3 + Math.random() * 3;
                    const randomRotate = Math.random() * 40 - 20
                    return (
                        <motion.button
                            key={letter}
                            disabled={isUsed || gameStatus != 'onGoing'}
                            whileHover={isUsed ? { scale: 1 } : { scale: 1.1 }}
                            whileTap={isUsed ? undefined : { scale: 0.97 }}
                            animate={
                                gameStatus === 'won'
                                    ? {
                                        background: '#fda4af',
                                        // background: '#881337',
                                        borderRadius: '50%',
                                        border: 'none',
                                        width: '15px',
                                        height: '15px',
                                        boxShadow: '0 0 25px 0 rgba(254,202,202,0.7)',
                                        opacity: 0.2,
                                        x: randomX,
                                        y: -500
                                    }
                                    : gameStatus === 'lost' && {
                                        rotate: randomRotate,
                                        y: 120,
                                    }
                            }
                            transition={gameStatus === 'onGoing'
                                ? { type: 'spring', stiffness: 700, damping: 17 }
                                : gameStatus === 'won'
                                    ? { duration: randomDuration, delay: randomDelay }
                                    : { duration: 2, delay: randomDelay }
                            }
                            onClick={() => { handleUserWord(letter) }}
                            className={clsx('bg-zinc-100 border-2 lg:border-4 border-zinc-50 rounded-xl aspect-square text-2xl lg:text-4xl font-bold uppercase cursor-pointer hover:bg-zinc-600 hover:text-zinc-100 '
                                , isUsed && 'bg-zinc-600 text-zinc-100 pointer-events-none'
                                , isWrong && 'opacity-20')}
                        >
                            <motion.span
                                animate={gameStatus === 'won' && { opacity: 0 }}
                            >{letter}
                            </motion.span>
                        </motion.button>
                    )
                }
                )
            }

        </div >


    )
}

export default Keyboard

// import clsx from 'clsx'
// import keyLetters from '../data/keyLetters.json'
// import { motion } from 'framer-motion'

// const Letters = keyLetters as string[]

// interface KeyboardType {
//     handleUserWord: (letter: string) => void,
//     rndWord: string,
//     userLetter: string[],
//     gameStatus: 'onGoing' | 'lost' | 'won'
// }

// const Keyboard = ({ handleUserWord, rndWord, userLetter, gameStatus }: KeyboardType) => {

//     return (
//         <>
//             <div
//                 className='self-stretch flex items-center justify-center gap-9 mt-10'>
//                 <div className='self-stretch grid grid-cols-[repeat(13,minmax(30px,45px))] gap-2 mb-6'>
//                     {
//                         Letters.map(letter => {
//                             const isUsed = userLetter.includes(letter)
//                             const isWrong = userLetter.includes(letter) && !rndWord.split('').includes(letter)
//                             return (
//                                 // gameStatus==='onGoing'&&
//                                 <motion.button
//                                     key={letter}
//                                     disabled={isUsed || gameStatus != 'onGoing'}
//                                     whileHover={isUsed ? { scale: 1 } : { scale: 1.1 }}
//                                     whileTap={isUsed ? undefined : { scale: 0.97 }}
//                                     transition={{ type: 'spring', stiffness: 700, damping: 17 }}
//                                     // animate={{
//                                     //     background: '#881337',
//                                     //     border: 'none',
//                                     //     width: '15px',
//                                     //     height: '15px',
//                                     //     boxShadow: '0 0 25px 0 rgba(254,202,202,0.7)',
//                                     // }}
//                                     // transition={{
//                                     //     duration: 2,
//                                     // }}
//                                     onClick={() => { handleUserWord(letter) }}
//                                     className={clsx('bg-zinc-100 border-2 border-zinc-50 rounded-xl aspect-square text-2xl font-bold uppercase cursor-pointer hover:bg-zinc-600 hover:text-zinc-100 '
//                                         , isUsed && 'bg-zinc-600 text-zinc-100 pointer-events-none'
//                                         , isWrong && 'opacity-20'
//                                         // , gameStatus != 'onGoing' && 'opacity-20 bg-zinc-600 text-zinc-100 pointer-events-none transition ease-in duration-1000'
//                                         , gameStatus != 'onGoing' && 'invisible transition ease-in'
//                                     )
//                                     }
//                                 >
//                                     <motion.span
//                                     // animate={{ opacity: 0 }}
//                                     >
//                                         {letter}
//                                     </motion.span>

//                                 </motion.button>
//                             )
//                         }
//                         )
//                     }

//                 </div>
//             </div>
//         </>
//     )



// }

// export default Keyboard










































