import { ReactNode } from "react"

interface RootProps {
  children: ReactNode
}

export default function Root({ children }: RootProps) {
  return (
    <div className="w-full md:max-w-[300px] h-[370px] md:h-full md:float-right p-6 md:p-8 flex flex-col justify-between">
      {children}
    </div>
  )
}
