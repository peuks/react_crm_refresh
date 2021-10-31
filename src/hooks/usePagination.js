import { useState } from "react";

/**
 *
 * @param {*} data
 * @param {*} itemsPerPage
 * @param {*} maxPages
 * @returns
 */
const usePagination = (data = [], itemsPerPage = 8, maxPages = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [index, setIndex] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.length > 0 ? data.slice(begin, end) : [];
  };

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    currentPage + 1 - maxPages > 0 &&
      (currentPage - maxPages) % maxPages === 0 &&
      setIndex(currentPage + 1);
  };

  const goTO = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));

    currentPage !== 1 &&
      (currentPage - 1 - maxPages) % maxPages === 0 &&
      setIndex(currentPage - maxPages);
  };

  return {
    next,
    prev,
    currentData,
    currentPage,
    maxPage,
    index,
    goTO,
    setCurrentPage,
  };
};

export default usePagination;
