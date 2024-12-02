"use client";

import Image from "next/image";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton";

type ItemProps = {
  item: {
    id: number;
    image: {
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };
};

export default function Item({ item }: ItemProps) {
  const [borderStyle, setBorderStyle] = useState("");

  const handleAddToCartClick = () => {
    setBorderStyle("border-2 border-orange-700");
  };

  const handleResetBorderStyle = () => {
    setBorderStyle("");
  };

  return (
    <li key={item.id} className="">
      <article className="flex flex-col justify-center items-center relative mb-4">
        <Image
          src={item.image.desktop}
          alt={item.name}
          width={180}
          height={180}
          className={`rounded-md overflow-hidden mb-4 ${borderStyle}`}
        />
        <AddToCartButton
          item={item}
          onAddToCartClick={handleAddToCartClick}
          onResetBorderStyle={handleResetBorderStyle}
        />
      </article>
      <p className="text-orange-700 text-sm">{item.category}</p>
      <h2 className="font-semibold">{item.name}</h2>
      <p className="font-bold text-orange-700 text-lg">${item.price}</p>
    </li>
  );
}
