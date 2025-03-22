"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { useState, useEffect } from "react"
import axios from "axios";

const judges = [
  {
    name: "Pieter Levels",
    handle: "@levelsio",
    image: "/images/judges/levelsio.jpg",
    role: "Founder of Nomad List & Remote OK",
    bio: "Making $3M+ ARR as a solo founder. Building in public since 2014. Bootstrapping startups.",
    twitter: "https://twitter.com/levelsio"
  },
  {
    name: "Logan Kilpatrick",
    handle: "@OfficialLoganK",
    image: "/images/judges/logan.jpg",
    role: "Developer Relations at OpenAI",
    bio: "Building the future of AI. Previously at Julia Computing. Passionate about developer tools and education.",
    twitter: "https://twitter.com/OfficialLoganK"
  },
  {
    name: "Sarah Guo",
    handle: "@saranormous",
    image: "/images/judges/sara.jpg",
    role: "Founder & GP at Conviction",
    bio: "Investing in AI, dev tools, and the future of work. Previously at Greylock Partners.",
    twitter: "https://twitter.com/saranormous"
  },
  {
    name: "Theo",
    handle: "@t3dotgg",
    image: "/images/judges/theo.jpg",
    role: "CEO of t3.gg",
    bio: "Building the future of web development. Creator of the T3 Stack. 500k+ YouTube subscribers.",
    twitter: "https://x.com/theo"
  },
  {
    name: "Evan You",
    handle: "@youyuxi",
    image: "/images/judges/evanyou.jpg",
    role: "Creator of Vue.js",
    bio: "Independent open source developer. Creator of Vue.js, Vite, and VitePress.",
    twitter: "https://twitter.com/youyuxi"
  },
  {
    name: "KP",
    handle: "@thisiskp_",
    image: "/images/judges/kp.jpg", // Falls kp.png in `public/` ist, sonst "../../kp.png"
    role: "Founder of KP Labs",
    bio: "Building the future of developer tools. Previously engineering at Vercel.",
    twitter: "https://twitter.com/thisiskp_"
  }
];

export function JudgesSection() {
  const [judgesWithImages, setJudgesWithImages] = useState(judges);

  useEffect(() => {
    const fetchProfileImages = async () => {
      const updatedJudges = await Promise.all(
        judges.map(async (judge) => {
          try {
            const username = judge.handle.replace("@", "");
            const response = await axios.get(
              `https://api.twitter.com/2/users/by/username/${username}`,
              {
                headers: {
                  Authorization: `AAAAAAAAAAAAAAAAAAAAAMZQ0AEAAAAASz5GeKlNjI5zCSztxRIJOTw9dmM%3DuVmDMtKWepvSHC3M8YMYfw6Mo3KP1FZ08xI6QqCK7eAM7Ebcdm`, 
                },
              }
            );
  
            const profileImageUrl = response.data.data.profile_image_url;
  
            // Falls Twitter ein Bild liefert, aktualisieren, sonst altes beibehalten
            return { ...judge, image: profileImageUrl || judge.image };
  
          } catch (error) {
            console.error(`Failed to fetch profile image for ${judge.name}:`, error);
            return judge; // Behalte das Originalbild, wenn der API-Call fehlschlägt
          }
        })
      );
      setJudgesWithImages(updatedJudges);
    };
  
    fetchProfileImages();
  }, []);
  

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {judgesWithImages.map((judge, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={judge.image} alt={judge.name} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">{judge.name}</h3>
                  <p className="text-sm text-gray-500">{judge.role}</p>
                  <p className="text-sm">{judge.bio}</p>
                  <a href={judge.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {judge.handle}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}