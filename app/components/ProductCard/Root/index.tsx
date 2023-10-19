import { ReactNode } from "react"

type RootProps = {
  role: 'listItem' | 'article' | 'div'
  children: ReactNode
}

export default function Root({ role, children }: RootProps) {
  const styleDefault = "w-full max-w-[345px] md:max-w-[600px] h-[620px] md:h-[465px] bg-neutral-300 rounded-lg"

  switch (role) {
    case 'article':
      return (
        <article className={styleDefault}>
          {children}
        </article>
      )

    case 'div':
      return (
        <div className={styleDefault}>
          {children}
        </div>
      )

    case 'listItem':
      return (
        <li className={styleDefault}>
          {children}
        </li>
      )

    default:
      return <></>
  }
}
