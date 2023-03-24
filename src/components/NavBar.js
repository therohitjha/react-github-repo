import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Button, Container } from "@mui/material";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container maxWidth="md">
      <Button
        sx={{ padding: "20px" }}
        color="primary"
        onClick={() => navigate(location.state ? location.state : "/")}
      >
        {location.state === null ? "Home" : "Back"}
      </Button>
      <Outlet />
    </Container>
  );
}
