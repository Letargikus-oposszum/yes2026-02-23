import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AllPizza from "./pages/AllPizza";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NewPizza from "./pages/NewPizza";
import NofFoundPage from "./pages/errors/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Sentry from "@sentry/react";
import Login from "./pages/Login";

Sentry.init({
  dsn: "https://493d99751089ad19ecf218f0b8ea7824@o4510912035815424.ingest.de.sentry.io/4510940353855568",
  sendDefaultPii: true
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPizza />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NofFoundPage />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored" />
  </StrictMode>
);
