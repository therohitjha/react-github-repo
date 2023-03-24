import CustomSelect from "../common-components/CustomSelect";
import { sortDropdown, statusDropdown } from "../constant";

function PullRequestsFilterSort({
  status,
  setStatus,
  sort,
  setSort,
  resetPagination
}) {
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setStatus(value);
    resetPagination();
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSort(value);
    resetPagination();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CustomSelect
        data={statusDropdown}
        value={status}
        onChange={handleFilterChange}
        style={{ marginRight: "10px" }}
      />
      <CustomSelect
        data={sortDropdown}
        value={sort}
        onChange={handleSortChange}
      />
    </div>
  );
}

export default PullRequestsFilterSort;
