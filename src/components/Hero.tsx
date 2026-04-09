import Link from 'next/link'

const REGISTER_URL =
  'https://auth.sender.net/register?scope=scope&client_id=22&response_type=code&redirect_uri=https://app.vivasend.com/'

const STATS = [
  { num: '55 000+', label: 'Klientų pasaulyje' },
  { num: '150',     label: 'Šalių' },
  { num: '99.9%',   label: 'Pristatymo rodiklis' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[120px] pb-20 px-[5%] overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(255,107,26,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(255,107,26,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Content */}
        <div>
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-orange/10 border border-orange/30 text-orange text-[13px] px-3 py-1.5 rounded-full mb-6">
            <span className="animate-pulse-dot w-1.5 h-1.5 bg-orange rounded-full" />
            Sender padalinys Lietuvoje
          </div>

          <h1 className="animate-fade-up-2 text-[clamp(36px,4.5vw,58px)] font-bold leading-[1.1] tracking-tight mb-5">
            Naujienlaiškiai,<br />
            kurie{' '}
            <span className="text-gradient">parduoda</span>
            <br />
            jūsų verslui
          </h1>

          <p className="animate-fade-up-3 text-[17px] text-vs-muted leading-[1.7] mb-9 max-w-[480px]">
            Profesionali el. laiškų marketingo platforma – automatizuokite
            komunikaciją, auginkite pardavimus ir valdykite prenumeratorius
            vienoje vietoje. Paprastai, greitai, nebrangiai.
          </p>

          <div className="animate-fade-up-3 flex flex-wrap gap-3">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded-[10px] font-medium text-[15px] hover:bg-orange-dark hover:-translate-y-0.5 orange-glow transition-all"
            >
              Išbandyti nemokamai
              <span className="text-lg leading-none">→</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-bg-3 text-vs-text border border-vs-border2 px-7 py-3.5 rounded-[10px] text-[15px] hover:bg-bg-4 transition-all"
            >
              Platformos apžvalga
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-vs-border">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-[26px] font-bold tracking-tight">{s.num}</div>
                <div className="text-[13px] text-vs-muted mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual – email preview card */}
        <div className="hidden lg:block relative">
          <div className="bg-bg-3 border border-vs-border2 rounded-2xl p-6">
            {/* Window chrome */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-[13px] text-vs-muted ml-1">Kampanijų valdymas</span>
            </div>

            {/* Email preview */}
            <div className="bg-bg rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13px] text-vs-muted">info@vivasend.com</span>
                <span className="text-[12px] text-vs-faint">Šiandien 10:24</span>
              </div>
              <div className="font-semibold text-[15px] mb-2">🎉 Specialus pasiūlymas tik jums!</div>
              <div className="text-[13px] text-vs-muted leading-relaxed">
                Sveiki! Šiandien turime ypatingą pasiūlymą jūsų verslui –
                30% nuolaida PRO planui. Naudokitės automatizuota platforma
                ir pasiekite klientus efektyviau.
              </div>
              <div className="inline-block mt-4 bg-orange text-white text-[13px] font-medium px-5 py-2.5 rounded-lg">
                Pasinaudoti pasiūlymu →
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -top-5 -right-4 bg-bg-3 border border-vs-border2 rounded-xl px-4 py-3 flex items-center gap-3 text-[13px] whitespace-nowrap">
            <div className="w-8 h-8 rounded-lg bg-[rgba(39,201,63,0.15)] flex items-center justify-center text-base flex-shrink-0">✉</div>
            <div>
              <div className="text-[11px] text-vs-muted">Pristatyta šiandien</div>
              <div className="font-semibold text-[14px] text-[#27c93f]">+2 847</div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 bg-bg-3 border border-vs-border2 rounded-xl px-4 py-3 flex items-center gap-3 text-[13px] whitespace-nowrap">
            <div className="w-8 h-8 rounded-lg bg-orange/15 flex items-center justify-center text-base flex-shrink-0">📈</div>
            <div>
              <div className="text-[11px] text-vs-muted">Atidarymo rodiklis</div>
              <div className="font-semibold text-[14px] text-orange">42.3%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
