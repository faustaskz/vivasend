'use client'
import { useState, useRef, useEffect } from 'react'

const VIVASEND_CONTEXT = `Tu esi VivaSend virtualus asistentė. VivaSend yra Sender padalinys Lietuvoje – profesionali el. laiškų marketingo platforma.

Pagrindinė informacija:
- VivaSend yra Sender.net padalinys Lietuvoje
- Platforma naudojasi 55 000+ klientų iš 150 šalių
- El. paštas: info@vivasend.com, tel: +370 683 730 98
- Registruotis: https://app.vivasend.com/register
- Prisijungti: https://app.vivasend.com

Kainos:
- Standard: nuo 9,30 €/mėn. (2500 prenumeratorių) – SMS/MMS, kelių vartotojų prieiga, API
- Pro: nuo 27,23 €/mėn. (2500 prenumeratorių) – nemokama SMS/MMS, laikmačiai, dedikuotas IP, A/B testavimas
- Enterprise: individuali kaina – neribotas laiškų kiekis, pasišventęs vadybininkas, SSO

Galimybės: kampanijų valdymas, automatizacija, dizaino šablonai, auditorijos segmentavimas, ataskaitos, API integracija, produktų importas, SMS/MMS.

Atsakyk trumpai, draugiškai, lietuviškai. Jei nežinai – nukreipk į info@vivasend.com.`

// ⚠️  Įklijuokite savo Anthropic API raktą čia arba naudokite .env.local
const API_KEY = process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY ?? ''

type Message = { role: 'user' | 'assistant'; content: string }

const SUGGESTIONS = [
  'Kokios kainos?',
  'Kaip pradėti?',
  'Ar yra nemokamas planas?',
  'Kaip veikia automatizacija?',
]

export default function Chatbot() {
  const [open, setOpen]           = useState(false)
  const [messages, setMessages]   = useState<Message[]>([])
  const [input, setInput]         = useState('')
  const [loading, setLoading]     = useState(false)
  const [showSugg, setShowSugg]   = useState(true)
  const bottomRef                 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function send(text: string) {
    if (!text.trim() || loading) return
    setInput('')
    setShowSugg(false)
    const newMessages: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setLoading(true)

    if (!API_KEY) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content:
            'Chatbot šiuo metu konfigūruojamas. Susisiekite su mumis: info@vivasend.com arba +370 683 730 98',
        },
      ])
      setLoading(false)
      return
    }

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 400,
          system: VIVASEND_CONTEXT,
          messages: newMessages,
        }),
      })
      const data = await res.json()
      const reply: string =
        data.content?.[0]?.text ??
        'Atsiprašau, nepavyko gauti atsakymo. Parašykite mums: info@vivasend.com'
      setMessages([...newMessages, { role: 'assistant', content: reply }])
    } catch {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'Įvyko klaida. Susisiekite: info@vivasend.com' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Window */}
      {open && (
        <div className="fixed bottom-24 right-7 z-50 w-[360px] max-sm:w-[calc(100vw-2rem)] max-sm:right-4 flex flex-col max-h-[520px] bg-bg-2 border border-vs-border2 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-bg-3 border-b border-vs-border px-5 py-4">
            <div className="w-9 h-9 rounded-full bg-orange flex items-center justify-center text-lg flex-shrink-0">
              🤖
            </div>
            <div>
              <p className="text-[14px] font-semibold">VivaSend Asistentė</p>
              <p className="text-[12px] text-vs-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                Prisijungusi dabar
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-[240px]">
            {/* Default bot greetings */}
            {messages.length === 0 && (
              <>
                <Bubble role="assistant">Sveiki! Aš esu VivaSend virtualus asistentė. Kuo galiu padėti? 😊</Bubble>
                <Bubble role="assistant">Galiu atsakyti į klausimus apie platformą, kainas ar padėti pradėti.</Bubble>
              </>
            )}

            {messages.map((m, i) => (
              <Bubble key={i} role={m.role}>{m.content}</Bubble>
            ))}

            {loading && (
              <div className="self-start bg-bg-3 rounded-[4px_14px_14px_14px] px-4 py-2.5">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="typing-dot block w-1.5 h-1.5 bg-vs-faint rounded-full"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {showSugg && (
            <div className="flex flex-wrap gap-1.5 px-4 pb-3">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-[12px] bg-bg-3 border border-vs-border2 text-vs-muted px-3 py-1.5 rounded-full cursor-pointer hover:border-orange hover:text-orange hover:bg-orange/5 transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2 items-center bg-bg-3 border-t border-vs-border px-3 py-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send(input)}
              placeholder="Rašyti žinutę..."
              className="flex-1 bg-bg border border-vs-border2 text-vs-text rounded-lg px-3.5 py-2 text-[13px] outline-none focus:border-orange transition-colors placeholder:text-vs-faint"
            />
            <button
              onClick={() => send(input)}
              disabled={loading}
              className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center text-white hover:bg-orange-dark transition-colors flex-shrink-0 disabled:opacity-50"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-7 right-7 max-sm:right-4 max-sm:bottom-4 z-50 w-14 h-14 rounded-full bg-orange text-xl text-white flex items-center justify-center shadow-[0_8px_24px_rgba(255,107,26,0.4)] hover:scale-105 transition-all"
        aria-label={open ? 'Uždaryti' : 'Atidaryti pokalbį'}
      >
        {open ? '✕' : '💬'}
      </button>
    </>
  )
}

function Bubble({ role, children }: { role: 'user' | 'assistant'; children: React.ReactNode }) {
  return (
    <div
      className={`max-w-[80%] text-[13.5px] leading-[1.55] px-3.5 py-2.5 ${
        role === 'user'
          ? 'self-end bg-orange text-white rounded-[14px_4px_14px_14px]'
          : 'self-start bg-bg-3 text-vs-text rounded-[4px_14px_14px_14px]'
      }`}
    >
      {children}
    </div>
  )
}
