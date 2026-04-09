const FEATURES = [
  {
    icon: '📧',
    title: 'Kampanijų valdymas',
    desc: 'Kurkite, planuokite ir siųskite el. laiškų kampanijas lengvai. Stebėkite rezultatus realiuoju laiku.',
  },
  {
    icon: '⚡',
    title: 'Automatizacija',
    desc: 'Automatizuotais laiškais priminkite apie nebaigtus pirkinius, pasveikinkite klientus ir informuokite svarbiomis progomis.',
  },
  {
    icon: '🎨',
    title: 'Dizaino šablonai',
    desc: 'Šimtai profesionalių nemokamai prieinamų šablonų. Kurkite gražius laiškus be dizaino žinių.',
  },
  {
    icon: '👥',
    title: 'Auditorijos valdymas',
    desc: 'Filtruokite ir segmentuokite kontaktus pagal pirkimo įpročius, geografiją ir kitus parametrus.',
  },
  {
    icon: '📊',
    title: 'Detalios ataskaitos',
    desc: 'Analizuokite atidarymų, paspaudimų ir konversijų rodiklius. Tobulinkite kampanijas duomenimis.',
  },
  {
    icon: '💬',
    title: 'SMS ir MMS žinutės',
    desc: 'Pasiekite klientus keliais kanalais – el. laiškai, SMS ir MMS žinutės iš vienos platformos.',
  },
  {
    icon: '🔗',
    title: 'API integracija',
    desc: 'Sujunkite VivaSend su savo el. parduotuve ar bet kuria kita sistema per mūsų lankstų API.',
  },
  {
    icon: '🛍️',
    title: 'Produktų importas',
    desc: 'Įkelkite prekių informaciją tiesiai iš el. parduotuvės į laišką vos vienu paspaudimu.',
  },
  {
    icon: '🔒',
    title: 'Saugumas ir atitiktis',
    desc: 'GDPR atitinkanti platforma su dedikuotu IP adresu ir aukščiausiais el. pašto saugumo standartais.',
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-orange text-[12px] tracking-[0.12em] uppercase mb-4 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-orange">
      {children}
    </p>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-[5%] bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Galimybės</SectionLabel>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold tracking-tight leading-[1.15] mb-4">
          Viskas ko reikia<br />efektyviam marketingui
        </h2>
        <p className="text-[17px] text-vs-muted leading-[1.7] max-w-[540px] mb-14">
          VivaSend suteikia profesionalius el. laiškų marketingo įrankius,
          kurie padeda auginti verslą be papildomų kaštų.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative bg-bg-3 border border-vs-border rounded-2xl p-7 hover:border-vs-border2 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-11 h-11 rounded-[10px] bg-orange/10 border border-orange/20 flex items-center justify-center text-xl mb-4 flex-shrink-0">
                {f.icon}
              </div>
              <h3 className="text-[18px] font-semibold mb-2.5">{f.title}</h3>
              <p className="text-[14px] text-vs-muted leading-[1.65]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
