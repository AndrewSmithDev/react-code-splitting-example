# Overview 

This is a basic example of how you can use code splitting in React with webpack.

It's possible to dynamically import components and only load them when they're needed by using `React.lazy` and `React.Suspense`. Here is a quick snippet on how it works. You can view the entire code for more details.

```typescript
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/loading-spinner";
import Nav from "./components/nav";

const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));
const Contact = React.lazy(() => import("./pages/contact"));
const NotFound = React.lazy(() => import("./pages/not-found"));

export const Routesa = () => {
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
```

# Building the Application

- Build: To build the server you can run `npm run build`. This will be the application and output the files to the public directory
- Dev: If you want to play around with the code you can run `npm start` which will start a webpack dev server with HMR

# Live Demo

You can view a live demo [here](react-code-splitting-example.vercel.app). There's nothing speculate about the interface the application is just a proof of concept.
