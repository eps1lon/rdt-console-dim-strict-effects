import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

function App() {
  console.log(window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__);
  console.error("render");
  console.warn("render");
  console.log("render");

  useEffect(() => {
    console.log(window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__);
    console.error("create");
    console.warn("create");
    console.log("create");

    return () => {
      console.log(window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__);
      console.error("cleanup");
      console.warn("cleanup");
      console.log("cleanup");
    };
  });
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
