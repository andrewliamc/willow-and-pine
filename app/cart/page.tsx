import Section from "../_components/Section";
import Button from "../_components/Button";
import TastingNotes from "../_components/TastingNotes";
import { getCart, getItemCount } from "@/lib/cart";
import { getAllTeas } from "@/lib/teaData";
import { removeFromCart, updateCartItem } from "./actions";

export const metadata = {
  title: "Cart | Willow & Pine Tea Co.",
};

export default function CartPage() {
  const cart = getCart();
  const teas = getAllTeas();

  const items = cart.items
    .map((item) => ({
      ...item,
      product: teas.find((tea) => tea.id === item.productId),
    }))
    .filter((item) => item.product);

  const subtotal = items.reduce(
    (sum, item) => sum + (item.product!.price * item.quantity || 0),
    0
  );

  return (
    <Section className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-heading text-4xl text-forest">Your cart</h1>
        <p className="text-forest/80">
          {getItemCount(cart) === 0
            ? "Your tea ritual awaits."
            : "A calm collection ready to steep."}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl bg-cream border border-forest/10 p-6">
          <p className="text-forest/80">
            Your cart is empty. Explore our blends to begin your ritual.
          </p>
          <Button href="/shop" variant="primary" className="mt-4">
            Browse blends
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 rounded-2xl bg-white/70 border border-forest/10 p-4 shadow-sm"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-subheading text-forest">
                        {item.product!.name}
                      </p>
                      <p className="text-sm text-forest/70">
                        {item.size} · {item.format}
                      </p>
                    </div>
                    <p className="font-subheading text-forest">
                      ${(item.product!.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <TastingNotes notes={item.product!.tastingNotes} />
                </div>

                <div className="flex items-center gap-3">
                  <form action={updateCartItem} className="flex items-center gap-2">
                    <input type="hidden" name="lineItemId" value={item.id} />
                    <input
                      name="quantity"
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      className="w-20 rounded-xl border border-forest/15 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soft-sage"
                    />
                    <Button type="submit" variant="secondary">
                      Update
                    </Button>
                  </form>
                  <form action={removeFromCart}>
                    <input type="hidden" name="lineItemId" value={item.id} />
                    <Button type="submit" variant="ghost">
                      Remove
                    </Button>
                  </form>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-forest text-cream p-6 space-y-4 shadow-md">
            <h2 className="font-heading text-2xl">Order summary</h2>
            <div className="flex items-center justify-between">
              <p className="text-cream/80">Subtotal</p>
              <p className="font-subheading">${subtotal.toFixed(2)}</p>
            </div>
            <p className="text-sm text-cream/70">
              Taxes and shipping will be calculated at checkout.
            </p>
            <Button
              variant="secondary"
              className="w-full text-center text-cream border-soft-sage hover:bg-soft-sage/20"
            >
              Proceed to checkout
            </Button>
          </div>
        </div>
      )}
    </Section>
  );
}
