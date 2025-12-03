"use server";

import { revalidatePath } from "next/cache";
import { getCart, saveCart } from "@/lib/cart";

export async function addToCart(formData: FormData) {
  const productId = String(formData.get("productId") ?? "");
  const quantity = Math.max(1, Number(formData.get("quantity") ?? 1));
  const size = (formData.get("size") as string) || undefined;
  const format = (formData.get("format") as string) || undefined;

  const cart = getCart();

  const existing = cart.items.find(
    (item) =>
      item.productId === productId && item.size === size && item.format === format
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.items.push({
      id: crypto.randomUUID(),
      productId,
      quantity,
      size,
      format,
    });
  }

  saveCart(cart);
  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/cart");
}

export async function removeFromCart(formData: FormData) {
  const lineItemId = String(formData.get("lineItemId") ?? "");
  const cart = getCart();
  cart.items = cart.items.filter((item) => item.id !== lineItemId);
  saveCart(cart);
  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/cart");
}

export async function updateCartItem(formData: FormData) {
  const lineItemId = String(formData.get("lineItemId") ?? "");
  const quantity = Math.max(1, Number(formData.get("quantity") ?? 1));
  const cart = getCart();
  const item = cart.items.find((entry) => entry.id === lineItemId);
  if (item) {
    item.quantity = quantity;
  }
  saveCart(cart);
  revalidatePath("/");
  revalidatePath("/shop");
  revalidatePath("/cart");
}
