import Image from "next/image";
import Button from "./Button";
import TastingNotes from "./TastingNotes";
import { TeaProduct } from "@/lib/teaData";
import { addToCart } from "@/app/cart/actions";

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export default function ProductCard({ product }: { product: TeaProduct }) {
  return (
    <div className="flex flex-col rounded-2xl bg-white/80 border border-forest/10 shadow-sm overflow-hidden">
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-subheading text-forest">{product.name}</p>
            <p className="text-sm text-forest/70">{product.shortDescription}</p>
          </div>
          <p className="font-subheading text-forest">{formatPrice(product.price)}</p>
        </div>
        <TastingNotes notes={product.tastingNotes} />
        <div className="flex gap-3 mt-auto pt-2">
          <Button href={`/shop/${product.slug}`} variant="secondary" className="flex-1">
            View details
          </Button>
          <form action={addToCart} className="flex-1">
            <input type="hidden" name="productId" value={product.id} />
            <input type="hidden" name="quantity" value={1} />
            <Button type="submit" variant="primary" className="w-full">
              Add to cart
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
