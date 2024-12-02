"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useCartStore } from "@/app/lib/useCartStore";
import Modal from "@/components/Modal";
import { getImagePath } from "@/utils/paths";

export default function Cart() {
  const cartStore = useCartStore();

  // Memoize the selected store values to prevent infinite loops
  const { cartItems, cartCount, resetCart } = useMemo(
    () => ({
      cartItems: cartStore.cartItems,
      cartCount: cartStore.cartCount,
      resetCart: cartStore.resetCart,
    }),
    [cartStore.cartItems, cartStore.cartCount, cartStore.resetCart]
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate the total price of the order
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleStartNewOrder = () => {
    resetCart();
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-white h-min w-full sm:w-1/3 p-4 shadow-md rounded-md">
        <h2 className="font-bold text-lg text-orange-700">
          Your Cart ({cartCount})
        </h2>
        {cartCount > 0 ? (
          <div className="flex flex-col justify-center items-center mt-6 w-full">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between w-full mb-4">
                <div className="flex flex-col">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-500">
                    Quantity: {item.quantity}
                  </span>
                  <span className="text-gray-500">
                    Price per unit: ${item.price}
                  </span>
                  <span className="text-gray-500">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
            <div className="w-full mt-4">
              <div className="flex justify-between font-semibold">
                <span>Order Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handleConfirmOrder}
                className="mt-4 bg-orange-700 text-white py-2 px-4 rounded-md w-full"
              >
                Confirm Order
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mt-6">
            <Image
              src={getImagePath("/assets/images/illustration-empty-cart.svg")}
              alt="Empty cart"
              width={150}
              height={150}
              className="img-cart-empty"
            />
            <p className="font-semibold text-gray-500 text-center">
              Your added items will appear here
            </p>
          </div>
        )}
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="font-bold text-lg text-orange-700 mb-4">
          Order Confirmed
        </h2>
        <div className="flex flex-col justify-center items-center mt-6 w-full">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between w-full mb-4">
              <div className="flex flex-col">
                <span className="font-semibold">{item.name}</span>
                <span className="text-gray-500">Quantity: {item.quantity}</span>
                <span className="text-gray-500">
                  Price per unit: ${item.price}
                </span>
                <span className="text-gray-500">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
          <div className="w-full mt-4">
            <div className="flex justify-between font-semibold">
              <span>Order Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleStartNewOrder}
              className="mt-4 bg-orange-700 text-white py-2 px-4 rounded-md w-full"
            >
              Start New Order
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
