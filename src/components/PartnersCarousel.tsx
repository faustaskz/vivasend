'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { viewportOptions } from '@/lib/animations'

const PARTNERS = [
  { name: 'EGU',           src: '/partners/egu.png.webp'                          },
  { name: 'Harmony Park',  src: '/partners/harmonypark-1-300x300.png.webp'        },
  { name: 'Litexpo',       src: '/partners/Litexpo_logo-1.png'                    },
  { name: 'Maxima',        src: '/partners/maxima-300x300.png.webp'               },
  { name: 'Moki Veži',     src: '/partners/mokivezi-1-300x300.png.webp'           },
  { name: 'Senukai',       src: '/partners/senukai-1-300x300.png'                 },
  { name: 'Vichy',         src: '/partners/vichy-1-300x300.png'                   },
  { name: 'Vision Express',src: '/partners/vision-express-logo-1-300x300.png.webp'},
]

// Duplicate for seamless infinite loop
const TRACK = [...PARTNERS, ...PARTNERS]

export default function PartnersCarousel() {
  return (
    <section className="py-10 bg-bg-2 border-y border-vs-border overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }} viewport={viewportOptions}
        className="text-center text-[11px] tracking-[0.1em] uppercase text-vs-faint mb-10"
      >
        Mūsų partneriai
      </motion.p>

      {/* Fade edges */}
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div className="flex items-center animate-carousel">
          {TRACK.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={180}
                height={48}
                className="h-11 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-90 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
