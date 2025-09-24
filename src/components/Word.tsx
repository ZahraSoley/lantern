import clsx from "clsx"
import { motion } from "framer-motion"

interface wordType {
    rndWord: string,
    userLetter: string[],
    gameStatus: 'onGoing' | 'lost' | 'won'
}

const Word = ({ rndWord, userLetter, gameStatus }: wordType) => {
    const rndWordLtr = rndWord.split('')

    return (
        <div className="flex gap-3 md:mt-15 ">
            {rndWordLtr.map((ltr, index) =>
                <motion.span
                    key={`${rndWord}-${index}`}
                    className={clsx(
                        "font-bold text-2xl md:text-4xl lg:text-5xl w-5 md:w-7 lg:w-10 border-b-4 md:border-b-4 pb-1 flex justify-center text-zinc-50 md:my-15",
                        gameStatus === "lost" && "drop-shadow-[0_0_25px_rgba(254,202,202,0.7)]"
                    )}
                    animate={{
                        borderBottomColor:
                            gameStatus === "onGoing"
                                ? "rgba(244,244,245,1)"
                                : "rgba(244,244,245,0)"
                    }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity:
                                gameStatus === 'onGoing'
                                    ? userLetter.includes(ltr) ? 1 : 0
                                    : 1
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        {ltr}
                    </motion.span>
                </motion.span>)
            }
        </div >
    )
}

export default Word
