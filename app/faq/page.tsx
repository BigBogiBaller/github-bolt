"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const faqs = [
  {
    question: "What is the Hackathon.dev competition?",
    answer: "Hackathon.dev is the world's largest online hackathon with over $1M in prizes. Participants can build projects using any technology stack over a specified period, competing for various prize categories while getting feedback from industry-leading judges."
  },
  {
    question: "Who can participate?",
    answer: "Anyone can participate! Whether you're a student, professional developer, or hobbyist programmer, all skill levels are welcome. You can participate individually or as part of a team (up to 4 members)."
  },
  {
    question: "What are the prizes and categories?",
    answer: "The total prize pool exceeds $1M, with the first place winner receiving $500,000. Other prizes include $300,000 for second place, $150,000 for third place, and $50,000 for the People's Choice award. Additional category prizes will be announced closer to the event."
  },
  {
    question: "How do I submit my project?",
    answer: "Projects should be submitted through our platform before the deadline. You'll need to provide a GitHub repository, demo video, and project description. Make sure to follow the submission guidelines detailed in your dashboard."
  },
  {
    question: "What technologies are allowed?",
    answer: "You can use any technology stack! Whether it's web development, mobile apps, AI/ML, blockchain, or hardware hacks - if you can build it, you can submit it. The only requirement is that the project must be created during the hackathon period."
  },
  {
    question: "Who are the judges and sponsors?",
    answer: "Our judges include industry leaders like Pieter Levels (Nomad List), Logan Kilpatrick (OpenAI), Sarah Guo (Conviction), Theo (t3.gg), Evan You (Vue.js), and KP (KP Labs). The event is sponsored by leading tech companies including Supabase, Cloudflare, Algorand, Netlify, Sentry, and Loops."
  },
  {
    question: "Where can I find the hackathon schedule?",
    answer: "The complete schedule, including registration deadlines, kickoff events, workshops, and submission deadlines, can be found in your participant dashboard after registration. Key dates will also be announced through our official communication channels."
  }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Everything you need to know about the hackathon</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Input
            type="search"
            placeholder="Search questions..."
            className="w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 hover:bg-muted/50 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </main>
  )
}