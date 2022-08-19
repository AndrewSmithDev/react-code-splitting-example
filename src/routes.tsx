import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/loading-spinner";
import Nav from "./components/nav";

const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));
const Contact = React.lazy(() => import("./pages/contact"));
const NotFound = React.lazy(() => import("./pages/not-found"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
