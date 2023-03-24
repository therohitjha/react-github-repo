import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useFetchData } from "../hooks/useFetchData";
import { baseUrl } from "../api";
import { statusDropdown } from "../constant";
import CustomSelect from "../common-components/CustomSelect";
import Error from "../common-components/Error";

function IssueListFilter({
  setStatus,
  status,
  setLabel,
  label,
  resetPagination
}) {
  const url = `${baseUrl}/labels`;
  const {
    data: labelList,
    loading: loadingLabelList,
    error: errorLabelList
  } = useFetchData(url);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    const val = typeof value === "string" ? value.split(",") : value;
    setLabel(val);
    resetPagination();
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setStatus(value);
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
      {errorLabelList.state ? (
        <Error message={errorLabelList.message} />
      ) : loadingLabelList ? (
        <div>Loading Labels...</div>
      ) : (
        <FormControl style={{ m: 1, width: 300 }}>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={label}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            style={{ height: "30px" }}
          >
            {labelList.map(({ name }) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={label.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
}

export default IssueListFilter;
