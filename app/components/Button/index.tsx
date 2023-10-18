import { ReactNode, ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: 'full' | 'just-content',
  icon?: string | ReactNode,
}

export default function Button({ children, icon, width, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      data-width={width}
      className="w-full data-[width=just-content]:w-max h-12 px-4 rounded-lg bg-brand md:hover:brightness-75 transition flex items-center gap-2 font-sans font-bold text-sm text-neutral-300"
    >
      {icon} {children}
    </button>
  )
}
