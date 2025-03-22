"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Spline from '@splinetool/react-spline'
import styles from '../public/styles/globals.css';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSplineLoaded, setIsSplineLoaded] = useState(false)
  const handleSplineLoad = (spline: any) => {
    setIsSplineLoaded(true);

    // Wait for the Spline animation to complete
    spline.onAnimationComplete(() => {
      setIsLoading(false); // Hide the loading screen after animation ends
    });
  };
  useEffect(() => {
    // Fallback: Hide the loading screen after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div
            className="relative w-full h-full spline-container"
            style={{
              willChange: "transform",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          >
            {!isSplineLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-300"></div>
              </div>
            )}
            <Spline
              className="w-full h-full"
              scene="https://prod.spline.design/VgWIlIsBWg3iwLNy/scene.splinecode"
              onLoad={() => setIsSplineLoaded(true)}
            />
            {/* Enhanced overlay to hide Spline logo */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/95 to-transparent z-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white animate-pulse"
                >
                  <path
                    d="M17.3333 2.66667L2.66667 17.3333H14.6667L14.6667 29.3333L29.3333 14.6667H17.3333V2.66667Z"
                    fill="currentColor"
                  />
                </svg>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white/80 font-medium"
              >
                Loading Hackathon.dev...
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm text-white/60 mt-2"
              >
                powered by Bolt.new
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}