import React, { FC } from "react";
import SortSelector from "./FilterActions/SortSelector";
import SearchingBar from "./FilterActions/SearchingBar";
import FilterProducts from "./FilterActions/FilterProducts/FilterProducts";

const FilterActionsPanel: FC = () => {
  return (
    <div className="mb-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:mb-5 lg:grid-cols-3 lg:items-center lg:justify-items-center">
      <FilterProducts />
      <SortSelector />
      <SearchingBar />
    </div>
  );
};

export default FilterActionsPanel;
