"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Trophy } from "lucide-react"

const prizes = [
  { place: "1st Place", amount: "$500,000", color: "from-yellow-500" },
  { place: "2nd Place", amount: "$300,000", color: "from-slate-300" },
  { place: "3rd Place", amount: "$150,000", color: "from-amber-700" },
  { place: "People's Choice", amount: "$50,000", color: "from-violet-500" },
]

export function PrizesSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200">
            Prize Pool
          </h2>
          <p className="text-muted-foreground">Compete for life-changing prizes</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Card className="relative overflow-hidden p-6 bg-gradient-to-br from-background to-background/50 border-violet-500/20 hover:border-violet-500/40 transition-all backdrop-blur-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} to-transparent opacity-[0.08]`} />
                <Trophy className="w-8 h-8 mb-4 text-violet-500" />
                <h3 className="text-xl font-semibold mb-2">{prize.place}</h3>
                <p className="text-2xl font-bold text-violet-300">{prize.amount}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}