import { ReactNode } from "react"

interface DetailsProps {
  currentPrice?: number;
  previousPrice?: number;
  button?: ReactNode;
}

export default function Details({
  button,
  currentPrice = 0,
  previousPrice
}: DetailsProps) {
  const convertToCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className="w-full flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-y-8">
      <p
        aria-label="product current price"
        className="font-display font-bold text-[32px] text-brand truncate select-none"
      >
        {convertToCurrency(currentPrice)}
      </p>

      {
        previousPrice && (
          <p
            aria-label="product previous price"
            className="font-sans font-medium text-sm text-neutral-200 truncate line-through select-none"
          >
            {convertToCurrency(previousPrice)}
          </p>
        )
      }

      {button}
    </div>
  )
}
