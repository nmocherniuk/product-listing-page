import React, { FC } from "react";

interface FilterByCategoryProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FilterByCategory: FC<FilterByCategoryProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Filter by Category
      </label>
      <select
        value={selectedCategory}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedCategory(e.target.value)
        }
        className="mt-1 w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:outline-none"
      >
        <option value="All">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByCategory;
