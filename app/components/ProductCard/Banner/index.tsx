import Image from "next/image";
import { ImageProps } from "next/image"

type BannerProps = ImageProps

export default function Banner({ ...props }: BannerProps) {
  return (
    <figure className="w-full md:max-w-[300px] h-[250px] md:h-full md:float-left">
      <Image
        {...props}
        alt={props.alt}
        priority
        className="w-full h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
      />
    </figure>
  )
}
