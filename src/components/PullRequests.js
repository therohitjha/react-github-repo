import { baseUrl } from "../api";
import ListUI from "../common-components/ListUI";
import { useFetchData } from "../hooks/useFetchData";
import usePagination from "../hooks/usePagination";
import Error from "../common-components/Error";

export default function PullRequests() {
  const { page } = usePagination();
  const url = `${baseUrl}/pulls?page=${page}&per_page=5`;
  const { data, loading, error } = useFetchData(url);

  if (error.state) return <Error message={error.message} />;
  return (
    <>
      {loading && <div className="loader"></div>}
      <h2>All Pull Requests</h2>
      <ListUI data={data} path={"pulls"} />
    </>
  );
}
