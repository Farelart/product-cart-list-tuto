import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  incrementCartItem: (id: number) => void;
  decrementCartItem: (id: number) => void;
  isReset: boolean;
  resetCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  cartCount: 0,
  isReset: false,
  clearReset: () => set({ isReset: false }),
  addToCart: (item) =>
    set((state) => {
      // Clear reset flag first
      if (state.isReset) {
        state.isReset = false;
      }

      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
          cartCount: state.cartCount + 1,
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
          cartCount: state.cartCount + 1,
        };
      }
    }),
  incrementCartItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ),
      cartCount: state.cartCount + 1,
    })),
  decrementCartItem: (id) =>
    set((state) => {
      const item = state.cartItems.find((cartItem) => cartItem.id === id);
      if (item && item.quantity > 1) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          ),
          cartCount: state.cartCount - 1,
        };
      } else if (item && item.quantity === 1) {
        return {
          cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
          cartCount: state.cartCount > 0 ? state.cartCount - 1 : 0,
        };
      }
      return state;
    }),
  resetCart: () =>
    set(() => ({
      cartItems: [],
      cartCount: 0,
      isReset: true,
    })),
}));
