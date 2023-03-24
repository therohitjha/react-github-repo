import { useState } from "react";
import usePagination from "../hooks/usePagination";
import { baseUrl } from "../api";
import { useFetchData } from "../hooks/useFetchData";
import ListUI from "../common-components/ListUI";
import PullRequestsFilterSort from "../components/PullRequestsFilterSort";
import { Pagination } from "@mui/material";
import Error from "../common-components/Error";
import { defaultSelectValue } from "../constant";

export default function PullRequestsViewAll() {
  const { count, page, handlePageChange, resetPagination } = usePagination(10);
  const [status, setStatus] = useState(defaultSelectValue);
  const [sort, setSort] = useState(defaultSelectValue);
  const url = `${baseUrl}/pulls?page=${page}&per_page=10${
    status !== defaultSelectValue ? `&status=${status}` : ""
  }${sort !== defaultSelectValue ? `&sort=${sort}` : ""}`;
  const { data, loading, error } = useFetchData(url);

  if (error.state) return <Error message={error.message} />;

  return (
    <>
      {loading && <div className="loader"></div>}
      <PullRequestsFilterSort
        sort={sort}
        setSort={setSort}
        status={status}
        setStatus={setStatus}
        resetPagination={resetPagination}
      />
      <div className={loading ? "list-opacity" : ""}>
        {" "}
        <ListUI data={data} path={"pulls"} />
        {data.length > 0 && (
          <Pagination count={count} page={page} onChange={handlePageChange} />
        )}
      </div>
    </>
  );
}
