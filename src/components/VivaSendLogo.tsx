interface Props { className?: string }

export default function VivaSendLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 175 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="VivaSend"
    >
      <text
        x="0"
        y="30"
        fontFamily="var(--font-geist-sans), sans-serif"
        fontWeight="700"
        fontSize="26"
        fill="#F0EEE8"
        letterSpacing="-0.5"
      >
        VivaSend
      </text>
      {/* Double chevron — tight against text */}
      <polygon points="148,8 157,20 148,32 153,32 162,20 153,8" fill="#FF6B1A" />
      <polygon points="139,8 148,20 139,32 144,32 153,20 144,8" fill="#FF8C42" opacity="0.65" />
    </svg>
  )
}
