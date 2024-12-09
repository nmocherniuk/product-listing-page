import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
}

const ProductItem: FC<ProductItemProps> = ({ imageUrl, title, price, id }) => {
  return (
    <div className="flex w-full flex-col rounded-lg border border-gray bg-white p-4 lg:h-[400px]">
      <Image
        src={imageUrl}
        alt={title}
        className="mb-3 self-center"
        height={199}
        width={290}
      />
      <div className="flex h-full flex-col justify-between gap-y-4">
        <h3 className="truncate text-[20px] font-medium text-black">{title}</h3>
        <div className="flex items-center justify-between gap-x-3">
          <span className="text-2xl font-semibold text-black">{price}$</span>
          <Link
            href={`/products/${id}`}
            className="max-w-[156px] rounded-xl bg-purple px-4 py-[10px] text-center text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
