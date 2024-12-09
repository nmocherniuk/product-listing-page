"use client";

import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import ProductItem from "@/components/ProductItem/ProductItem";
import Pagination from "@/components/Pagination/Pagination";
import { fetchProducts } from "@/store/productsSlice";
import FilterActionsPanel from "@/components/FilterActionsPanel/FilterActionsPanel";
import { Product } from "@/types";

const Products: FC = () => {
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const itemsPerPage = 4;

  // Select data from Redux store
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  const { filteredProducts } = useSelector(
    (state: RootState) => state.productFilter,
  );

  // Fetch products if not already fetched
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  // Update paginated products whenever filtered products or current page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setPaginatedProducts(filteredProducts.slice(startIndex, endIndex));
  }, [filteredProducts, currentPage]);

  let content;

  // Render loading state
  if (loading) {
    content = <p className="text-center text-black">Loading...</p>;
  }

  // Render error state if loading is false but there is an error
  if (!loading && error) {
    content = <p className="text-center text-black">Error: {error}</p>;
  }

  // Render products and pagination if no error and not loading
  if (!loading && !error && products) {
    content = (
      <>
        <article className="grid grid-cols-1 place-items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {paginatedProducts.map((item: Product, index: number) => (
            <ProductItem
              id={item.id}
              key={`product-${index}`}
              title={item.name}
              imageUrl={item.image}
              price={item.price}
            />
          ))}
        </article>
        <Pagination
          totalItems={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </>
    );
  }

  return (
    <section>
      <h2 className="mb-8 text-center text-[26px] font-medium text-black sm:text-[28px] lg:text-[34px]">
        Products List
      </h2>
      <FilterActionsPanel />
      {content}
    </section>
  );
};

export default Products;
