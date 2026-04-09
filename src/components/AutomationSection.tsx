const REGISTER_URL =
  'https://auth.sender.net/register?scope=scope&client_id=22&response_type=code&redirect_uri=https://app.vivasend.com/'

const FLOW_STEPS = [
  { icon: '✓', status: 'done',    name: 'Naujas prenumeratorius',   desc: 'Klientas užsiregistravo formoje' },
  { icon: '✓', status: 'done',    name: 'Sveikinimo laiškas išsiųstas', desc: 'Akimirksniu po registracijos' },
  { icon: '⏱', status: 'active',  name: 'Palaukti 3 dienas',        desc: 'Sistema laukia prieš kitą žingsnį' },
  { icon: '📧', status: 'pending', name: 'Pasiūlymo laiškas',        desc: 'Specialus pasiūlymas naujam klientui' },
  { icon: '🎯', status: 'pending', name: 'Segmentavimas pagal veiklą', desc: 'Perkėlimas į atitinkamą grupę' },
]

const CHECKS = [
  'Automatiniai laiškai apie nebaigtą pirkinių krepšelį',
  'Sveikinimų laiškai naujiems prenumeratoriams',
  'Gimtadienio ir šventiniai pasveikinimų scenarijai',
  'Pakartotiniai laiškai tiems, kurie neatidarė',
]

export default function AutomationSection() {
  return (
    <section className="py-24 px-[5%] bg-bg-2">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Content */}
        <div>
          <p className="inline-flex items-center gap-2 text-orange text-[12px] tracking-[0.12em] uppercase mb-4 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-orange">
            Automatizacija
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold tracking-tight leading-[1.15] mb-4">
            Pasiekite maksimalius<br />rezultatus su minimaliais<br />ištekliais
          </h2>
          <p className="text-[16px] text-vs-muted leading-[1.7] mb-6">
            Automatizuota VivaSend platforma dirba už jus 24/7. Nustatykite
            taisykles vieną kartą – sistema pati siųs reikiamus laiškus
            reikiamu metu.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {CHECKS.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-[15px] text-vs-muted">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-orange/15 text-orange text-[11px] flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                {c}
              </li>
            ))}
          </ul>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded-[10px] font-medium text-[15px] hover:bg-orange-dark hover:-translate-y-0.5 orange-glow transition-all"
          >
            Pradėti automatizuoti
          </a>
        </div>

        {/* Flow visual */}
        <div className="bg-bg-3 border border-vs-border2 rounded-2xl p-7">
          <p className="text-[11px] text-vs-faint uppercase tracking-[0.08em] mb-4">
            Automatizacijos scenarijus
          </p>
          <div className="flex flex-col">
            {FLOW_STEPS.map((s, i) => (
              <div
                key={s.name}
                className={`flex gap-4 items-start py-4 ${i > 0 ? 'border-t border-vs-border' : ''}`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${
                    s.status === 'done'
                      ? 'bg-[rgba(39,201,63,0.15)] text-[#27c93f]'
                      : s.status === 'active'
                      ? 'bg-orange text-white'
                      : 'bg-bg-4 text-vs-muted'
                  }`}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="text-[14px] font-medium mb-0.5">{s.name}</div>
                  <div className="text-[12px] text-vs-muted">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
