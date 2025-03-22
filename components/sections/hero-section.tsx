"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Spline from '@splinetool/react-spline'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* 3D Background Animation */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/DhN5ip5BkzTJmH9w/scene.splinecode" />
        {/* Enhanced overlay to hide Spline logo */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/95 to-transparent z-10" />
      </div>

      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 left-8 z-50"
      >
        <div className="flex items-center space-x-2 group">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white transform group-hover:scale-110 transition-transform duration-300"
          >
            <path
              d="M17.3333 2.66667L2.66667 17.3333H14.6667L14.6667 29.3333L29.3333 14.6667H17.3333V2.66667Z"
              fill="currentColor"
              className="group-hover:text-violet-400 transition-colors duration-300"
            />
          </svg>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-200 group-hover:from-violet-300 group-hover:to-violet-100 transition-all duration-300">
            bolt.new
          </span>
        </div>
      </motion.div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <div className="inline-block">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 border border-violet-700/20 rounded-full bg-violet-500/10 text-violet-300 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>$1M+ in Prizes</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200 [text-shadow:0_4px_8px_rgba(168,85,247,0.1)]">
            The World&apos;s Largest
            <br />
            Hackathon
          </h1>
          <p className="text-lg md:text-xl font-bold text-white max-w-2xl mx-auto mt-6">
            Push boundaries. Build the impossible. Compete for $1M+ in prizes.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button 
              onClick={() => window.location.href = "https://form.typeform.com/to/wf94YwH4?typeform-source=t.co"}
              size="lg" 
              className="bg-violet-600 hover:bg-violet-700 hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-violet-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button 
              onClick={() => window.location.href = "https://x.com/boltdotnew"}
              size="lg" 
              variant="outline"
              className="hover:scale-105 transform transition-all duration-200 backdrop-blur-sm hover:bg-violet-500/10"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_50%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
    </section>
  )
}