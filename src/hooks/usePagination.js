import { useState } from "react";

export default function usePagination(countNumber) {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(countNumber || 5);

  const handlePageChange = (event, value) => {
    setPage(value);
    if (value >= count) {
      setCount(count + 1);
    } else if (value < count && count > (countNumber || 5)) {
      setCount(count - 1);
    }
  };

  function resetPagination() {
    setPage(1);
  }
  return { page, count, handlePageChange, resetPagination };
}
