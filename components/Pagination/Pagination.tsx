import React, { FC } from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Загальна кількість сторінок

  // Generate an array of page numbers for pagination buttons
  const paginationButtons = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  // Handle page change when a button is clicked
  const handlePageChange = (page: number): void => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <ul className="mt-8 flex items-center justify-center space-x-2 sm:mt-11 lg:mt-[84px]">
      {paginationButtons.map((page: number) => (
        <li key={page}>
          <button
            onClick={() => handlePageChange(page)}
            className={`rounded-lg border border-purple px-4 py-2 ${
              currentPage === page
                ? "bg-purple text-white"
                : "bg-transparent text-purple"
            }`}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
