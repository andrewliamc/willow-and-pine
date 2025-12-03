import { cookies } from "next/headers";

export type CartItem = {
  id: string;
  productId: string;
  quantity: number;
  size?: string;
  format?: string;
};

export type Cart = {
  items: CartItem[];
};

const CART_COOKIE = "wp-cart";

export function getCart(): Cart {
  const store = cookies().get(CART_COOKIE)?.value;
  if (!store) return { items: [] };
  try {
    const parsed = JSON.parse(store) as Cart;
    return { items: parsed.items ?? [] };
  } catch {
    return { items: [] };
  }
}

export function saveCart(cart: Cart) {
  cookies().set(CART_COOKIE, JSON.stringify(cart), {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export function getItemCount(cart?: Cart): number {
  const data = cart ?? getCart();
  return data.items.reduce((sum, item) => sum + item.quantity, 0);
}
