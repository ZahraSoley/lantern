import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface gameType {
  gameStatus: "onGoing" | "lost" | "won";
}

const lanternVariants: Variants = {

  floating: {
    y: [0, -20, 0],
    scale: 1,
    opacity: 1,
    boxShadow: '0 0 25px 0 rgba(254,202,202,0.7)',
    transition: {
      y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
      scale: { duration: 0 },
      opacity: { duration: 0 },
      boxShadow: { duration: 0 },
    }
  },

  won: {
    y: [0, -250],
    scale: 1.2,
    opacity: 1,
    boxShadow: [
      "0 0 25px 0 rgba(254,202,202,0.7)",
      "0 0 25px 5px rgba(255,228,230,0.7)",
    ],
    transition: {
      duration: 6,
      ease: "easeInOut"
    }
  },

  lost: {
    y: 0,
    opacity: 0.8,
    boxShadow: 'none',
    transition: {
      y: { duration: 1.5 },
      duration: 3.5,
      ease: "easeIn"
    }
  }

}

const flameVariants: Variants = {

  default: {
    boxShadow: [
      "0 0 0 0 rgba(255,228,230,0.7)",
      "0 0 25px 5px rgba(255,228,230,0.7)",
      "0 0 0 0 rgba(255,228,230,0.7)",
    ],
    scale: 1,
    transition: {
      boxShadow: {
        repeat: Infinity,
        duration: 1.3
      },
      scale: { duration: 0 },
    }
  },

  lost: {
    boxShadow: 'none',
    scale: 0,
    transition: {
      duration: 2,
      ease: 'easeIn'
    }
  }
}

export default function Lantern({ gameStatus }: gameType) {
  return (
    <div className="w-60 h-60 rounded-full mt-3 flex justify-center items-center  overflow-hidden">
      <motion.div
        className="w-17 h-22 bg-gradient-to-b from-rose-300 to-rose-900 rounded-full shadow-[0_0_25px_0_rgba(254,202,202,0.7)] relative"
        variants={lanternVariants}
        animate={gameStatus === 'onGoing' ? 'floating' : gameStatus === 'won' ? 'won' : 'lost'}
      >
        <motion.div
          className="w-3 h-3 rounded-full bg-[radial-gradient(circle,#fda4af_40%,#881337_60%)] absolute left-7 top-16"
          variants={flameVariants}
          animate={gameStatus === 'lost' ? 'lost' : 'default'}
        />
        <div className="w-6 h-2 rounded-full bg-rose-900 mt-1.5 absolute top-22 left-5.5" />
      </motion.div>
    </div>
  );
}

