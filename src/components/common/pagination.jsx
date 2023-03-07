import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = itemsCount / pageSize;

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  const isCurrentPage = (page) =>
    page === currentPage ? "page-item active" : "page-item";

  return (
    <nav>
      <ul className="pagination pagination-lg">
        {pages.map((p) => (
          <li className={isCurrentPage(p)} aria-current="page" key={p}>
            <span className="page-link" onClick={() => onPageChange(p)}>
              {p}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
