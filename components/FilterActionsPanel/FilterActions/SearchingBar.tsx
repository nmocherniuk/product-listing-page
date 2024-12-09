import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { setSearchQuery } from "@/store/productFilterSlice";
import Image from "next/image";
import pencilLoopIcon from "@/assets/svg/pencil-loop.png";

const SearchingBar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Handle changes in the search input field
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchTerm = e.target.value;
    dispatch(setSearchQuery(searchTerm));
  };

  return (
    <div className="relative flex w-full items-center">
      <input
        onChange={handleSearchChange}
        id="search-field"
        className="h-[35px] w-full border border-gray bg-white px-4 text-black outline-none placeholder:text-gray-400"
        type="text"
        placeholder="Search by name"
      />
      <Image
        src={pencilLoopIcon}
        alt="Search Icon"
        className="absolute right-3 h-5 w-5"
      />
    </div>
  );
};

export default SearchingBar;
