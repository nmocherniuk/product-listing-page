import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setCategoryFilter, setPriceRange } from "@/store/productFilterSlice";
import FilterByCategory from "./FilterByCategory";
import FilterByPriceRange from "./FilterByPriceRange";
import FilterModal from "./FilterModal";
import { PriceRange, Product } from "@/types";
import FilterIcon from "@/assets/svg/filter-icon.svg";

const FilterProducts: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Selecting data from the Redux store
  const { allProducts, categoryFilter, priceRange } = useSelector(
    (state: RootState) => state.productFilter,
  );

  // Local state for price range
  const [localPriceRange, setLocalPriceRange] = useState<PriceRange>({
    min: priceRange.min || null,
    max: priceRange.max || null,
  });

  // Local state for category filter
  const [localCategoryFilter, setLocalCategoryFilter] =
    useState<string>(categoryFilter);

  // State for managing the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Function to apply filters
  const handleApplyFilters = (): void => {
    dispatch(setCategoryFilter(localCategoryFilter));
    dispatch(
      setPriceRange({
        min: localPriceRange.min ? localPriceRange.min : 0,
        max: localPriceRange.max ? localPriceRange.max : Infinity,
      }),
    );
    setIsModalOpen(false);
  };

  // Function to reset all filters
  const handleResetFilters = (): void => {
    dispatch(setCategoryFilter("All"));
    dispatch(setPriceRange({ min: 0, max: Infinity }));
    setLocalCategoryFilter("All");
    setLocalPriceRange({ min: null, max: null });
    setIsModalOpen(false);
  };

  // Extract unique categories from all products
  const categories = Array.from(
    new Set(allProducts.map((product: Product) => product.category)),
  );

  return (
    <>
      <button
        className="flex h-9 w-full items-center justify-center rounded-lg border border-gray bg-white p-2 px-4 text-black outline-none"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="flex items-center justify-center gap-x-1">
          <FilterIcon />
          Filters
        </span>
      </button>
      {isModalOpen && (
        <FilterModal
          onClose={() => setIsModalOpen(false)}
          onApply={handleApplyFilters}
          onReset={handleResetFilters}
        >
          <FilterByCategory
            categories={categories}
            selectedCategory={localCategoryFilter}
            setSelectedCategory={setLocalCategoryFilter}
          />
          <FilterByPriceRange
            priceRange={localPriceRange}
            setPriceRange={setLocalPriceRange}
          />
        </FilterModal>
      )}
    </>
  );
};

export default FilterProducts;
