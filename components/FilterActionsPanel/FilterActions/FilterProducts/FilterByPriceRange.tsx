import React, { FC } from "react";
import { PriceRange } from "@/types";

interface FilterByPriceRangeProps {
  priceRange: PriceRange;
  setPriceRange: (range: PriceRange) => void;
}

const FilterByPriceRange: FC<FilterByPriceRangeProps> = ({
  priceRange,
  setPriceRange,
}) => {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700">
        Filter by Price Range
      </label>
      <div className="flex gap-4">
        <input
          type="number"
          id="min-range"
          placeholder="Min"
          value={priceRange.min || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPriceRange({ ...priceRange, min: Number(e.target.value) })
          }
          className="w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:outline-none"
        />
        <input
          type="number"
          id="max-range"
          placeholder="Max"
          value={priceRange.max || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPriceRange({ ...priceRange, max: Number(e.target.value) })
          }
          className="w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:outline-none"
        />
      </div>
    </div>
  );
};

export default FilterByPriceRange;
