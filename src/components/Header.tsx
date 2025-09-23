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
    <div className="self-stretch flex justify-between lg:justify-around items-center gap-5 my-5 ">

      <span className="lg:text-4xl sm:text-lg font-bold text-zinc-50 ">
        Guess the word, and let the lantern rise
        
      </span>

      <div className="flex gap-5 md:gap-10 items-center ">
        <button
          onClick={handleHint}
          disabled={!!hintLtr}
          className={clsx("text-2xl text-zinc-100 flex justify-center",
            hintLtr
              ? "opacity-50 cursor-default"
              : "cursor-pointer active:scale-95 transition duration-150 ease-in-out"
          )}
        >
          <LightBulbIcon className="h-7 lg:h-15" />
        </button>

        <div
          className="aspect-square w-8 lg:w-17 flex justify-center relative cursor-default"
        >
          <HeartIcon className="fill-zinc-50" />
          <span className="text-black font-bold lg:text-2xl absolute top-1 lg:top-5">{heart}</span>
        </div>

        <button
          disabled={userLetter.length === 0}
          onClick={reset}
          className=" bg-zinc-100 w-6 h-6 lg:w-14 lg:h-14 cursor-pointer rounded-full flex justify-center
        active:scale-95 transition duration-150 ease-in-out"
        >
          <ArrowPathIcon className="w-5 lg:w-11 " />
        </button>
      </div>

    </div>
  )
}

export default Header