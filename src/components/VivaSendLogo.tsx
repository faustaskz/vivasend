interface Props { className?: string }

export default function VivaSendLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 200 40"
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
      {/* Double chevron */}
      <polygon points="178,8 187,20 178,32 183,32 192,20 183,8" fill="#FF6B1A" />
      <polygon points="169,8 178,20 169,32 174,32 183,20 174,8" fill="#FF8C42" opacity="0.65" />
    </svg>
  )
}
