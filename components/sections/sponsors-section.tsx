"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

// Define the tier function
const getTier = (sponsorName: string): string => {
  const tiers: { [key: string]: string } = {
    Supabase: "Diamond",
    Cloudflare: "Diamond",
    Algorand: "Diamond",
    Netlify: "Diamond",
    Sentry: "Diamond",
    Loops: "Diamond",
  };

  return tiers[sponsorName] || "Diamond"; // Default to "Diamond" if no tier is found
};

export function SponsorsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-muted-foreground">Backed by industry leaders</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {[
            { name: "Supabase", logo: "/images/sponsors/supabase.png" },
            { name: "Cloudflare", logo: "/images/sponsors/cloudfare.png" },
            { name: "Algorand", logo: "/images/sponsors/algorand.png" },
            { name: "Netlify", logo: "/images/sponsors/netlify.png" },
            { name: "Sentry", logo: "/images/sponsors/sentry.png" },
            { name: "Loops", logo: "/images/sponsors/loops.png" },
          ].map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <Card className="relative overflow-hidden p-8 bg-gradient-to-br from-background to-background/50 border-violet-500/20 hover:border-violet-500/40 transition-all hover:scale-105 group">
                <div className="relative h-12 flex items-center justify-center">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-h-full max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}