import { List, ListItem, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Cards from "./Cards";

export default function ListUI({ data, path }) {
  const { pathname } = useLocation();

  return data?.length > 0 ? (
    <List>
      {data?.map(({ id, title, user: { login }, number }) => (
        <Link key={id} to={`/${path}/${number}`} state={pathname}>
          <ListItem className={"list"}>
            <ListItemText primary={title} secondary={login} />
          </ListItem>
        </Link>
      ))}
    </List>
  ) : (
    <Cards>No Data</Cards>
  );
}
