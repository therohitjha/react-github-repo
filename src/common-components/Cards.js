import { Card, CardContent, Typography } from "@mui/material";
import Error from "../common-components/Error";
export default function Cards({ children }) {
  // for some api query, limit exceeded message coming from children, that's why checking the type before rendering
  return typeof children !== "object" ? (
    <Card style={{ marginBottom: "20px" }}>
      <CardContent>
        <Typography>{children}</Typography>
      </CardContent>
    </Card>
  ) : (
    <Error message={children} />
  );
}
