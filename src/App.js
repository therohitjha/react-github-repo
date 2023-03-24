import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import PullRequestsViewAll from "./Pages/PullRequestsViewAll";
import IssueListViewAll from "./Pages/IssueListViewAll";
import Detail from "./Pages/Detail";
import "./styles.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Dashboard />} />
        <Route path="/issues-list" element={<IssueListViewAll />} />
        <Route path="/pullrequest-list" element={<PullRequestsViewAll />} />
        <Route path="/:sectionType/:number" element={<Detail />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
