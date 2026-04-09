'use client'
import { motion } from 'framer-motion'
import { staggerContainerFast, fadeIn, viewportOptions } from '@/lib/animations'

const CLIENTS = ['MAXIMA', 'LITEXPO', 'MOKI VEŽI', 'SENUKAI', 'VICHY', 'EGU.LT']

export default function LogoBar() {
  return (
    <div className="px-[5%] py-10 bg-bg-2 border-y border-vs-border overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }} viewport={viewportOptions}
        className="text-center text-[11px] tracking-[0.1em] uppercase text-vs-faint mb-7"
      >
        Pasitiki geriausi Lietuvos verslai
      </motion.p>
      <motion.div
        variants={staggerContainerFast} initial="hidden"
        whileInView="visible" viewport={viewportOptions}
        className="flex flex-wrap items-center justify-center gap-10 md:gap-14"
      >
        {CLIENTS.map((c) => (
          <motion.span
            key={c}
            variants={fadeIn}
            className="font-bold text-[18px] tracking-tight text-vs-faint hover:text-vs-muted transition-colors cursor-default select-none"
          >
            {c}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
