"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/productsSlice";
import { Product } from "@/types";

const ProductDetail = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  const dispatch = useDispatch<AppDispatch>();

  // Select data from Redux store
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  // Fetch products if not already fetched
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // Find the product by ID
  const product = products.find((p: Product) => p.id.toString() === productId);

  // Conditional rendering logic
  let content;

  if (loading) {
    content = <p className="text-center text-black">Loading...</p>;
  }

  if (!loading && error) {
    content = <p className="text-center text-black">Error: {error}</p>;
  }

  if (!loading && !error && product) {
    content = (
      <>
        <article className="mb-8 flex max-w-[850px] flex-col items-center border border-gray bg-white p-6 sm:mb-14 sm:flex-row sm:gap-x-8 lg:gap-x-14">
          <Image
            src={product.image}
            height={300}
            width={300}
            alt={product.name}
            className="mb-5 aspect-[1/1.1] w-full rounded-sm"
          />
          <div>
            <p className="mb-3 text-lg text-black">
              <span className="font-semibold">Title: </span> {product.name}
            </p>
            <p className="mb-3 text-lg text-black">
              <span className="font-semibold">Description: </span>
              {product.description}
            </p>
            <p className="text-lg text-black">
              <span className="font-semibold">Price: </span> {product.price}$
            </p>
          </div>
        </article>
        <Link
          href="/products"
          className="w-full max-w-60 rounded-xl bg-purple px-4 py-[10px] text-center text-base text-white"
        >
          Back to Products
        </Link>
      </>
    );
  }

  return (
    <section className="flex flex-col items-center">
      <h2 className="mb-8 text-center text-[26px] font-medium text-black sm:text-[28px] lg:text-[34px]">
        Product Detail
      </h2>
      {content}
    </section>
  );
};

export default ProductDetail;
