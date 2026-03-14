import React from "react";

const Pagination = ({ page, setPage, totalItems, itemsPerPage }) => {

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex items-center justify-center gap-5 mt-6">

      {/* Previous Button */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-40"
      >
        Previous
      </button>

      {/* Page Info */}
      <span className="font-semibold">
        Page {page + 1} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages - 1}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;