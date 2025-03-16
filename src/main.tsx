import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./globals.css";
import App from "./App.tsx";
import ThemeWrapper from "./components/wrappers/ThemeWrapper/ThemeWrapper.tsx";
import PlanProvider from "./components/wrappers/PlanProvider/PlanProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeWrapper>
      <PlanProvider>
        <App />
      </PlanProvider>
    </ThemeWrapper>
  </StrictMode>
);
