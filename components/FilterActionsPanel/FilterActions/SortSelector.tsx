import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setSortOption } from "@/store/productFilterSlice";
import SortIcon from "@/assets/svg/sort-icon.svg";
import SortToGreatIcon from "@/assets/svg/sort-to-great.svg";
import SortToLessIcon from "@/assets/svg/sort-lo-less.svg";

// Define sorting options with titles and corresponding icons
const options = [
  {
    title: "Sorting by price",
    icon: <SortIcon className="h-5 w-5 text-black" />,
  },
  {
    title: "Low to High",
    icon: <SortToGreatIcon className="h-5 w-5 text-black" />,
  },
  {
    title: "High to Low",
    icon: <SortToLessIcon className="h-5 w-5 text-black" />,
  },
];

const SortSelector: FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0].title);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  // Handle selection of a sorting option
  const handleSelectOption = (optionTitle: string): void => {
    setSelectedValue(optionTitle);
    dispatch(setSortOption(optionTitle));
    setIsDropdownOpen(false);
  };

  // State to track the currently selected sorting option
  const toggleDropdown = (): void => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      <div
        className="flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm"
        onClick={toggleDropdown}
      >
        <span className="flex items-center justify-center gap-1 text-black">
          {options.find((option) => option.title === selectedValue)?.icon}
          {selectedValue}
        </span>
      </div>
      {isDropdownOpen && (
        <ul className="absolute mt-2 w-full rounded-lg border border-gray-300 bg-white shadow-sm">
          {options.map((option, index) => (
            <li
              key={`option-${index}`}
              className={`flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 ${
                selectedValue === option.title ? "bg-gray-200" : ""
              }`}
              onClick={() => handleSelectOption(option.title)}
            >
              {option.icon}
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortSelector;
