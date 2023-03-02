import React from "react";
import "./../../util/styles/Pagination.css";

export const Pagination = ({ totalPage, currentPage, handleChangePage }) => {
  const pageArr = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pageArr.map((page) => (
        <button
          key={page}
          onClick={() => handleChangePage(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
