import './App.css'
import { useEffect } from "react"
import Header from './components/Header'
import Lantern from './components/Lantern'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import UseLogic from './hooks/UseLogic'
import { AnimatePresence, motion } from 'framer-motion'

export default function App() {

  const { rndWord, userLetter, heart, gameStatus, reset, handleUserWord, handleHint, hintLtr } = UseLogic()

  useEffect(() => {
    console.log("Updated userLetter", userLetter, '    remaining heart:', heart)
  }, [userLetter, heart])

  useEffect(() => {
    console.log('random word is:', rndWord)
  }, [rndWord])

  return (
      <div className='w-[3/4] h-screen flex flex-col items-center justify-between m-auto'>
        <Header reset={reset} handleHint={handleHint} heart={heart} hintLtr={hintLtr} userLetter={userLetter} />
        <Lantern gameStatus={gameStatus} />
        <Word rndWord={rndWord} userLetter={userLetter} gameStatus={gameStatus} />
        <AnimatePresence mode='wait'>
          <motion.div
            key={rndWord}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <Keyboard handleUserWord={handleUserWord} userLetter={userLetter} rndWord={rndWord} gameStatus={gameStatus} />
          </motion.div >
        </AnimatePresence>
    </div>
  )
}
