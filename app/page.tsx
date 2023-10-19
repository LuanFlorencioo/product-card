import { BsCart3 } from "react-icons/bs"
import { Button, ProductCard } from "./components"
import ImageProduct from "./assets/image-product.jpg"

export default function Home() {
  return (
    <main className="w-full min-h-screen px-4 py-6 flex flex-col justify-center items-center">
      <ProductCard role="article">
        <ProductCard.Banner
          src={ImageProduct}
          alt="Banner default"
        />

        <ProductCard.Painel>
          <ProductCard.Painel.Info
            category="perfume"
            name="gabrielle essence eau de parfum"
            description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
          />

          <ProductCard.Painel.Details
            currentPrice={149.99}
            previousPrice={169.99}
            button={
              <Button width="full" icon={<BsCart3 />}>
                Add to Cart
              </Button>
            }
          />
        </ProductCard.Painel>
      </ProductCard>
    </main>
  )
}
