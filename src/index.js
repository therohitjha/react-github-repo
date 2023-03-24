import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./ErrorBoundry";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary />
  </StrictMode>
);
