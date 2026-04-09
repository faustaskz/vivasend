'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, slideInLeft, slideInRight, viewportOptions } from '@/lib/animations'

const REGISTER_URL = 'https://auth.sender.net/register?scope=scope&client_id=22&response_type=code&redirect_uri=https://app.vivasend.com/'

const CHECKS = [
  'Patogus vizualinis redaktorius be HTML žinių',
  'Nemokami profesionalūs dizaino šablonai',
  'Prisitaikantis dizainas visiems įrenginiams',
  'HTML redaktorius pažengusiems vartotojams',
]

export default function DesignSection() {
  return (
    <section className="py-24 px-[5%] bg-bg">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportOptions} className="bg-bg-3 border border-vs-border2 rounded-2xl p-7 order-2 lg:order-1">
          <p className="text-[11px] text-vs-faint uppercase tracking-[0.08em] mb-4">El. laiško peržiūra</p>
          <motion.div className="bg-bg rounded-xl overflow-hidden" whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}>
            <div className="bg-orange px-5 py-4 text-center">
              <span className="font-bold text-xl text-white tracking-tight">VivaSend</span>
            </div>
            <div className="p-5">
              <p className="font-semibold text-[15px] mb-2">🎉 Sveikiname prisijungus!</p>
              <p className="text-[13px] text-vs-muted leading-relaxed mb-4">Esate sveiki atvykę į VivaSend platformą. Pradėkite savo pirmą kampaniją jau šiandien.</p>
              <div className="bg-orange text-white text-center py-2.5 rounded-lg text-[13px] font-medium">Pradėti nemokamai →</div>
            </div>
            <div className="border-t border-vs-border px-5 py-3 text-center">
              <span className="text-[11px] text-vs-faint">© VivaSend | Atsisakyti prenumeratos</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="order-1 lg:order-2">
          <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-orange text-[12px] tracking-[0.12em] uppercase mb-4 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-orange">
            Dizainas
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[clamp(28px,3.5vw,44px)] font-bold tracking-tight leading-[1.15] mb-4">
            Kurkite laiškus,<br />kurie išsiskiria
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[16px] text-vs-muted leading-[1.7] mb-6">
            Profesionalaus dizaino laiškai nebereikalauja dizainerio. Naudokitės patogiu „drag & drop" redaktoriumi.
          </motion.p>
          <motion.ul variants={staggerContainer} className="flex flex-col gap-3 mb-8">
            {CHECKS.map((c) => (
              <motion.li key={c} variants={fadeUp} className="flex items-start gap-2.5 text-[15px] text-vs-muted">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-orange/15 text-orange text-[11px] flex items-center justify-center flex-shrink-0">✓</span>
                {c}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp}>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded-[10px] font-medium text-[15px] hover:bg-orange-dark hover:-translate-y-0.5 orange-glow transition-all">
              Kurti pirmą laišką
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
