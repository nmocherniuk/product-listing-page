import React, { FC } from "react";
import CrossIcon from "@/assets/svg/cross-icon.svg";

interface FilterModalProps {
  onClose: () => void;
  onApply: () => void;
  onReset: () => void;
  children: React.ReactNode;
}

const FilterModal: FC<FilterModalProps> = ({
  onClose,
  onApply,
  onReset,
  children,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 p-8">
      <div className="w-full max-w-[600px] rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-8 flex items-center justify-between">
          <h4 className="text-lg font-medium text-gray-700">Filters</h4>
          <CrossIcon
            className="cursor-pointer text-gray-700"
            onClick={onClose}
          />
        </div>
        {children}
        <div className="mt-6 flex justify-end gap-4">
          <button
            className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 shadow-sm"
            onClick={onReset}
          >
            Reset
          </button>
          <button
            className="rounded-lg bg-purple px-4 py-2 text-white shadow-sm"
            onClick={onApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
