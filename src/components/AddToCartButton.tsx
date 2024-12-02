"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useCartStore } from "@/app/lib/useCartStore";

type AddToCartButtonProps = {
  item: {
    id: number;
    name: string;
    price: number;
  };
  onAddToCartClick: () => void;
  onResetBorderStyle: () => void;
};

export default function AddToCartButton({
  item,
  onAddToCartClick,
  onResetBorderStyle,
}: AddToCartButtonProps) {
  const [clicked, setClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const incrementCartItem = useCartStore((state) => state.incrementCartItem);
  const decrementCartItem = useCartStore((state) => state.decrementCartItem);
  const isReset = useCartStore((state) => state.isReset);

  const handleClick = () => {
    setClicked(true);
    onAddToCartClick();
    addToCart(item);
  };

  // Reset local state when cart is reset
  useEffect(() => {
    if (isReset) {
      setClicked(false);
      setQuantity(1);
      onResetBorderStyle();
    }
  }, [isReset, onResetBorderStyle]);

  const handleQuantityChange = (
    action: "increment" | "decrement",
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    if (action === "increment") {
      setQuantity(quantity + 1);
      incrementCartItem(item.id);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
      decrementCartItem(item.id);
      if (quantity === 1) {
        setClicked(false);
        setQuantity(1);
        onResetBorderStyle();
      }
    }
  };

  return (
    <>
      {clicked ? (
        <div
          className="bg-orange-700 text-white shadow-sm flex justify-between items-center gap-2 w-[60%]
            md:px-[5%] md:py-[2.5%] px-2 py-1 rounded-full absolute bottom-1 add-to-cart"
        >
          <div
            onClick={(e) => handleQuantityChange("decrement", e)}
            className="flex justify-center items-center 
          border border-white rounded-full p-1 w-4 h-4"
          >
            <Image
              src={"assets/images/icon-decrement-quantity.svg"}
              alt="Icon add to cart"
              width={15}
              height={15}
              className="w-full"
            />
          </div>

          <p className="add-to-cart-text">{quantity}</p>

          <div
            onClick={(e) => handleQuantityChange("increment", e)}
            className="flex justify-center items-center 
          border border-white rounded-full p-1 w-4 h-4"
          >
            <Image
              src={"assets/images/icon-increment-quantity.svg"}
              alt="Icon add to cart"
              width={15}
              height={15}
              className="w-full"
            />
          </div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="bg-white shadow-sm flex justify-center items-center gap-2 w-[60%]
            md:px-[5%] md:py-[2.5%] px-2 py-1 rounded-full absolute bottom-1 add-to-cart"
        >
          <Image
            src={"assets/images/icon-add-to-cart.svg"}
            alt="Icon add to cart"
            width={15}
            height={15}
            className="add-to-cart-icon"
          />
          <p className="add-to-cart-text">Add to Cart</p>
        </div>
      )}
    </>
  );
}
