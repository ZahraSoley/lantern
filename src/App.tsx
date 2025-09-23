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
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col m-auto items-center w-3xl '>
        <Header reset={reset} handleHint={handleHint} heart={heart} hintLtr={hintLtr} userLetter={userLetter} />
        <Lantern gameStatus={gameStatus} />
        <Word rndWord={rndWord} userLetter={userLetter} gameStatus={gameStatus} />
        <AnimatePresence mode='wait'>
          <motion.div className='flex flex-col m-auto items-center ml-3 mr-3 w-3xl'
            key={rndWord}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <Keyboard handleUserWord={handleUserWord} userLetter={userLetter} rndWord={rndWord} gameStatus={gameStatus} />
          </motion.div >
        </AnimatePresence>
      </div>
    </div>
  )
}

