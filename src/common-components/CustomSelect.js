import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

export default function CustomSelect({ data, onChange, value, style = {} }) {
  return (
    <Select
      style={{ ...style, height: "30px" }}
      value={value}
      onChange={onChange}
    >
      {data.map(({ label, value }) => (
        <MenuItem value={value} key={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}
