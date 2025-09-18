import { useState } from "react"
import wordList from '../data/wordList.json'
import KeyLetters from '../data/keyLetters.json'

const words = wordList as string[];
const Letters = KeyLetters as string[]

type gameStatusType = 'onGoing' | 'lost' | 'won'
interface UseLogicType {
  rndWord: string,
  userLetter: string[],
  heart: number,
  handleUserWord: (letter: string) => void,
  gameStatus: gameStatusType,
  reset: () => void,
  hintLtr: string | null,
  handleHint: () => void,
}

const UseLogic = (): UseLogicType => {

  const [rndWord, setRndWord] = useState<string>(words[Math.floor(Math.random() * words.length)])
  const [userLetter, setUserLetter] = useState<string[]>([])
  const [hintLtr, setHintLtr] = useState<string | null>(null)
  const [heart, setHeart] = useState<number>(6)



  const handleUserWord = (letter: string) => {

    setUserLetter((prev) => prev.includes(letter) || prev.length >= 9
      ? prev
      : [...prev, letter])

    if (!rndWord.split('').includes(letter)) {
      setHeart(prev => prev - 1)
    }

  }

  const isWon = rndWord.split('').every(ltr => userLetter.includes(ltr))
  const isLost = heart === 0
  const gameStatus = isLost ? 'lost' : isWon ? 'won' : 'onGoing'

  const reset = () => {
    setUserLetter([])
    setHeart(6)
    setRndWord(words[Math.floor(Math.random() * words.length)])
    setHintLtr(null)
  }

  const handleHint = () => {
    const missing = Letters.find(ltr =>
      rndWord.includes(ltr) && !userLetter.includes(ltr))

    if (missing) {
      setHintLtr(missing)
      setUserLetter(prev => [...prev, missing])
    }
  }

  return { rndWord, userLetter, heart, gameStatus, reset, handleUserWord, handleHint, hintLtr }
}

export default UseLogic










