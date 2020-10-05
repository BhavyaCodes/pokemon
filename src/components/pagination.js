import React from "react";

const Pagination = ({ currentPage, pageSize, setCurrentPage, totalData }) => {
  return (
    <nav>
      <ul className="pagination">
        {Array(Math.ceil(totalData / pageSize))
          .fill(1)
          .map((el, i) => (
            <li
              key={i + 1}
              className={
                i + 1 === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                style={{ cursor: "pointer", "user-select": "none" }}
                onClick={() => setCurrentPage(i + 1)}
                className="page-link"
              >
                {i + 1}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
