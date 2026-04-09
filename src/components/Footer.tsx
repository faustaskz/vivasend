'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOptions } from '@/lib/animations'
import VivaSendLogo from './VivaSendLogo'

const LINKS = {
  Pagalba: [
    { label: 'Žinynas',             href: 'https://vivasend.lt/zinynas/' },
    { label: 'info@vivasend.com',   href: 'mailto:info@vivasend.com' },
    { label: '+370 683 730 98',     href: 'tel:+37068373098' },
    { label: 'Kontaktai',           href: 'https://vivasend.lt/kontaktai/' },
  ],
  'Apie mus': [
    { label: 'Kainos',       href: '#pricing' },
    { label: 'Galimybės',    href: '#features' },
    { label: 'Tinklaraštis', href: 'https://vivasend.lt/tinklarastis/' },
  ],
  'Taisyklės': [
    { label: 'Duomenų tvarkymas',       href: 'https://vivasend.lt/duomenu-tvarkymas/' },
    { label: 'Privatumas ir Slapukai',  href: 'https://vivasend.lt/privatumo-ir-slapuku-politika/' },
    { label: 'Anti-spam politika',      href: 'https://vivasend.lt/anti-spam-politika/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-bg-2 border-t border-vs-border pt-16 pb-8 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          <motion.div variants={fadeUp}>
            <VivaSendLogo className="h-7 w-auto mb-3" />
            <p className="text-[14px] text-vs-muted leading-relaxed max-w-[220px]">
              VivaSend – galingas ir įnovatyvus naujienlaiškių įrankis Jūsų verslui. Sender padalinys Lietuvoje.
            </p>
          </motion.div>
          {Object.entries(LINKS).map(([col, links]) => (
            <motion.div key={col} variants={fadeUp}>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-vs-muted mb-4">{col}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[14px] text-vs-muted hover:text-vs-text transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOptions} transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-vs-border gap-3 text-[13px] text-vs-faint"
        >
          <span>© VivaSend, UAB 2024. Visos teisės saugomos.</span>
          <span>Sender padalinys Lietuvoje</span>
        </motion.div>
      </div>
    </footer>
  )
}
