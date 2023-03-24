import { Link } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";
import PullRequests from "./PullRequests";
import IssueList from "./IssueList";

export default function Dashboard() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <PullRequests />
          <Link to="/pullrequest-list">
            <Button color="primary">View All</Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <IssueList />
          <Link to="/issues-list">
            <Button color="primary">View All</Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
