import clsx from 'clsx'
import keyLetters from '../data/keyLetters.json'
import { motion } from 'framer-motion'
import { useMediaQuery } from "react-responsive"

const Letters = keyLetters as string[]

interface KeyboardType {
    handleUserWord: (letter: string) => void,
    rndWord: string,
    userLetter: string[],
    gameStatus: 'onGoing' | 'lost' | 'won'
}

const Keyboard = ({ handleUserWord, rndWord, userLetter, gameStatus }: KeyboardType) => {

    const isMd = useMediaQuery({ minWidth: 768 })
    const isLg = useMediaQuery({ minWidth: 1024 })

    return (

        <div className={clsx('m-5 grid justify-center grid-cols-[repeat(7,minmax(10px,50px))] md:grid-cols-[repeat(9,minmax(30px,60px))] lg:grid-cols-[repeat(13,minmax(30px,70px))] gap-1.5 md:gap-2 lg:mt-5',
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
                                        borderRadius: '50%',
                                        border: 'none',
                                        scale: 0.3,
                                        boxShadow: '0 0 25px 0 rgba(254,202,202,0.7)',
                                        opacity: 0,
                                        x: randomX,
                                        y: isLg ? -750 : isMd ? -1000 : -500
                                    }
                                    : gameStatus === 'lost' && {
                                        rotate: randomRotate,
                                        y: 120,
                                    }
                            }
                            transition={gameStatus === 'onGoing'
                                ? { type: 'spring', stiffness: 700, damping: 17 }
                                : gameStatus === 'won'
                                    ? { duration: isLg ? randomDuration : isMd ? 2 + randomDuration : randomDuration, delay: randomDelay }
                                    : { duration: 2, delay: randomDelay }
                            }
                            onClick={() => { handleUserWord(letter) }}
                            className={clsx('bg-zinc-100 border-2 md:border-4 border-zinc-50 rounded-xl aspect-square text-2xl md:text-3xl lg:text-4xl font-bold uppercase cursor-pointer hover:bg-zinc-600 hover:text-zinc-100 '
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











































