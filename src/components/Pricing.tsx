'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, cardVariant, viewportOptions } from '@/lib/animations'

const REGISTER_URL = 'https://auth.sender.net/register?scope=scope&client_id=22&response_type=code&redirect_uri=https://app.vivasend.com/'
const CONTACT_URL  = 'https://vivasend.lt/kontaktai/'

const PLANS = [
  {
    name: 'Standard', desc: 'Esminiai el. pašto įrankiai modernaus verslo plėtrai internetu',
    price: '9,30', sub: 'nuo 2 500 prenumeratorių', featured: false, cta: 'Pradėti', ctaHref: REGISTER_URL,
    features: [
      { bold: 'Jūsų',       rest: ' prekės ženklas' },
      { bold: 'SMS',        rest: ' ir MMS žinutės' },
      { bold: 'Kelių vartotojų', rest: ' prieiga' },
      { bold: '',           rest: 'Prenumeratorių formos' },
      { bold: '',           rest: 'API integracija' },
      { bold: '',           rest: 'Pagalbos centras 24/7' },
    ],
  },
  {
    name: 'Pro', desc: 'Išplėstinės daugiakanalės funkcijos ir aukščiausios kokybės palaikymas',
    price: '27,23', sub: 'nuo 2 500 prenumeratorių', featured: true, cta: 'Pradėti', ctaHref: REGISTER_URL,
    features: [
      { bold: '',           rest: 'Viskas iš Standard, plius:' },
      { bold: 'Nemokama',   rest: ' SMS ir MMS' },
      { bold: 'Animuoti',   rest: ' laikmačiai' },
      { bold: 'Išplėstinė', rest: ' automatizacija' },
      { bold: 'Dedikuotas', rest: ' IP adresas' },
      { bold: '',           rest: 'A/B testavimas' },
    ],
  },
  {
    name: 'Enterprise', desc: 'Didelėms organizacijoms – personalizavimas ir automatiniai sprendimai',
    price: null, sub: 'kaina pagal poreikius', featured: false, cta: 'Gauti pasiūlymą', ctaHref: CONTACT_URL,
    features: [
      { bold: '',                    rest: 'Viskas iš Pro, plius:' },
      { bold: 'Neribotas',           rest: ' laiškų kiekis' },
      { bold: 'Pasišventęs',         rest: ' sėkmės vadybininkas' },
      { bold: 'Išplėstiniai vartotojų', rest: ' leidimai' },
      { bold: '',                    rest: 'SSO (SAML v2)' },
      { bold: '',                    rest: 'Paslaugų lygio sutartis' },
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-[5%] bg-bg-2">
      <div className="max-w-[1200px] mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
          <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-orange text-[12px] tracking-[0.12em] uppercase mb-4 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-orange">
            Kainos
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[clamp(28px,3.5vw,44px)] font-bold tracking-tight leading-[1.15] mb-4">
            Išleisk mažiau, daryk daugiau
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[17px] text-vs-muted leading-[1.7] max-w-[540px] mb-14">
            Paprasta ir prieinama kaina be jokių sutarčių, įsipareigojimų ir papildomų mokesčių.
          </motion.p>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden" whileInView="visible" viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`flex flex-col bg-bg-3 border rounded-2xl p-8 ${plan.featured ? 'border-orange bg-gradient-to-b from-orange/7 to-bg-3' : 'border-vs-border hover:border-vs-border2'} transition-colors`}
            >
              {plan.featured && <span className="self-start text-[11px] font-semibold tracking-wider uppercase bg-orange text-white px-3 py-1 rounded-full mb-5">Populiariausias</span>}
              <h3 className="text-[24px] font-bold mb-2">{plan.name}</h3>
              <p className="text-[14px] text-vs-muted leading-snug mb-6">{plan.desc}</p>
              <div className="pb-7 mb-7 border-b border-vs-border">
                {plan.price
                  ? <><span className="text-[40px] font-extrabold tracking-tight">{plan.price} €</span><span className="text-[14px] text-vs-muted">/mėn.</span></>
                  : <span className="text-[28px] font-bold">Individualiai</span>
                }
                <p className="text-[13px] text-vs-faint mt-1">{plan.sub}</p>
              </div>
              <ul className="flex-1 flex flex-col gap-2.5 mb-7">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-vs-muted">
                    <span className="text-orange mt-0.5 flex-shrink-0">✓</span>
                    {f.bold ? <span><strong className="text-vs-text">{f.bold}</strong>{f.rest}</span> : <span>{f.rest}</span>}
                  </li>
                ))}
              </ul>
              <a href={plan.ctaHref} target="_blank" rel="noopener noreferrer"
                className={`block text-center py-3.5 rounded-[10px] text-[15px] font-medium transition-all ${plan.featured ? 'bg-orange text-white hover:bg-orange-dark' : 'border border-vs-border2 text-vs-text hover:bg-bg-4'}`}>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
