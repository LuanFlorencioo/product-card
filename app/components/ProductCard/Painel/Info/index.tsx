interface InfoProps {
  category?: string,
  name?: string,
  description?: string,
}

export default function Info({ category, description, name }: InfoProps) {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-4">
      {
        category && (
          <p
            aria-label="product category"
            className="w-full font-sans font-medium text-sm text-neutral-200 tracking-[3.5px] uppercase truncate select-none"
          >
            {category}
          </p>
        )
      }

      {
        name && (
          <p
            aria-label="product name"
            className="w-full font-display font-bold text-[32px] text-neutral-100 leading-10 capitalize line-clamp-2 md:line-clamp-3 text-ellipsis selection:bg-brand selection:text-neutral-300 md:leading-10"
          >
            {name}
          </p>
        )
      }

      {
        description && (
          <p
            aria-label="product description"
            className="max-w-[295px] font-sans font-medium text-sm text-neutral-200 leading-[22px] line-clamp-4 text-ellipsis select-none"
          >
            {description}
          </p>
        )
      }
    </div>
  )
}
