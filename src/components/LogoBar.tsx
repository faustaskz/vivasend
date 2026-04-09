const CLIENTS = ['MAXIMA', 'LITEXPO', 'MOKI VEŽI', 'SENUKAI', 'VICHY', 'EGU.LT']

export default function LogoBar() {
  return (
    <div className="px-[5%] py-10 bg-bg-2 border-y border-vs-border">
      <p className="text-center text-[11px] tracking-[0.1em] uppercase text-vs-faint mb-7">
        Pasitiki geriausi Lietuvos verslai
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
        {CLIENTS.map((c) => (
          <span
            key={c}
            className="font-bold text-[18px] tracking-tight text-vs-faint hover:text-vs-muted transition-colors cursor-default select-none"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}
