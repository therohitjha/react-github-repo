import { useState } from "react";
import { baseUrl } from "../api";
import { useFetchData } from "../hooks/useFetchData";
import usePagination from "../hooks/usePagination";
import IssueListFilter from "../components/IssueListFilter";
import { Pagination } from "@mui/material";
import ListUI from "../common-components/ListUI";
import Error from "../common-components/Error";
import { defaultSelectValue } from "../constant";

export default function IssueListViewAll() {
  const { count, page, handlePageChange, resetPagination } = usePagination(10);
  const [status, setStatus] = useState(defaultSelectValue);
  const [label, setLabel] = useState([]);
  const url = `${baseUrl}/issues?page=${page}&per_page=10${
    status !== defaultSelectValue ? `&${status}` : ""
  }${label.length > 0 ? `&labels=${label}` : ""}`;
  const { data, loading, error } = useFetchData(url);

  if (error.state) return <Error message={error.message} />;

  return (
    <>
      {loading && <div className="loader"></div>}
      <IssueListFilter
        label={label}
        setLabel={setLabel}
        setStatus={setStatus}
        status={status}
        resetPagination={resetPagination}
      />
      <div className={loading ? "list-opacity" : ""}>
        {" "}
        <ListUI data={data} path={"issues"} />
        {data.length > 0 && (
          <Pagination count={count} page={page} onChange={handlePageChange} />
        )}
      </div>
    </>
  );
}
