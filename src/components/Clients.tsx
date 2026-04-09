'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, scaleIn, cardVariant, viewportOptions } from '@/lib/animations'

const REGISTER_URL = 'https://auth.sender.net/register?scope=scope&client_id=22&response_type=code&redirect_uri=https://app.vivasend.com/'

const CLIENTS = ['Maxima', 'Litexpo', 'Moki Veži', 'Vichy Vandens Parkas', 'Vision Express', 'Harmony Park', 'Senukai', 'Egu.lt']

export default function Clients() {
  return (
    <section id="clients" className="py-24 px-[5%] bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          variants={scaleIn} initial="hidden" whileInView="visible" viewport={viewportOptions}
          className="rounded-2xl border border-orange/20 text-center px-8 py-14 mb-20"
          style={{ background: 'linear-gradient(135deg, rgba(255,107,26,0.10) 0%, rgba(255,107,26,0.04) 60%, transparent 100%)' }}
        >
          <motion.p variants={fadeUp} className="inline-flex items-center gap-2 justify-center text-orange text-[12px] tracking-[0.12em] uppercase mb-4 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-orange after:content-[''] after:block after:w-5 after:h-0.5 after:bg-orange">
            VivaSend – Sender padalinys
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[clamp(28px,3.5vw,44px)] font-bold tracking-tight leading-[1.15] mb-4">
            Prisijunkite prie 55 000+ verslų
          </motion.h2>
          <motion.p variants={fadeUp} className="text-vs-muted text-[16px] mb-8 max-w-lg mx-auto">
            Mūsų platforma naudojasi klientai iš daugiau nei 150 šalių. Pradėkite siųsti efektyvias kampanijas jau dabar!
          </motion.p>
          <motion.div variants={fadeUp}>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-[10px] font-medium text-[15px] hover:bg-orange-dark hover:-translate-y-0.5 orange-glow transition-all">
              Išbandyti nemokamai →
            </a>
          </motion.div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOptions} transition={{ duration: 0.5 }}
          className="text-center text-[12px] tracking-[0.12em] uppercase text-vs-faint mb-8">
          Mūsų klientai
        </motion.p>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden" whileInView="visible" viewport={viewportOptions}
          className="flex flex-wrap gap-3 justify-center"
        >
          {CLIENTS.map((c) => (
            <motion.div key={c} variants={cardVariant} whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-bg-3 border border-vs-border hover:border-vs-border2 hover:text-vs-text text-vs-muted rounded-full px-5 py-2 text-[14px] font-medium transition-colors cursor-default">
              {c}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
