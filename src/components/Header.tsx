import { ArrowPathIcon } from "@heroicons/react/16/solid"
import { LightBulbIcon } from "@heroicons/react/16/solid"
import { HeartIcon } from "@heroicons/react/16/solid"
import clsx from "clsx"

interface headerType {
  reset: () => void,
  handleHint: () => void,
  heart: number,
  hintLtr: string | null,
  userLetter: string[]
}

const Header = ({ reset, handleHint, heart, hintLtr, userLetter }: headerType) => {

  return (
    <div className="self-stretch flex justify-between items-center mb-5 mt-5">

      <p className="text-2xl font-bold text-zinc-50 ">
        Guess the word, and let the lantern rise
      </p>

      <button
        onClick={handleHint}
        disabled={!!hintLtr}
        className={clsx("text-2xl text-zinc-100  w-10 h-10 flex justify-center",
          hintLtr
            ? "opacity-50 cursor-default"
            : "cursor-pointer active:scale-95 transition duration-150 ease-in-out"
        )}
      >
        <LightBulbIcon className="h-10 " />
      </button>

      <div
        className="w-12 h-12 flex justify-center relative cursor-default"
      >
        <HeartIcon className="fill-zinc-50" />
        <span className="text-black font-bold text-xl absolute top-2.5 right-[19px]">{heart}</span>
      </div>

      <button
        disabled={userLetter.length === 0}
        onClick={reset}
        className="text-2xl font-bold bg-zinc-100 text-black  cursor-pointer w-9 h-9 rounded-full flex justify-center
        active:scale-95 transition duration-150 ease-in-out"
      >
        <ArrowPathIcon className="w-8 " />
      </button>

    </div>
  )
}

export default Header