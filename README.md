# Overview 

This is a basic example of how you can use code splitting in React with webpack.

It's possible to dynamically import components and only load them when they're needed by using `React.lazy` and `React.Suspense`. Here is a quick snippet on how it works. You can view the rest of the repo for more details.

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

# Run the Application

- To build the server you can run `npm run build`. This will build the application and output the files to the public directory
- To run the dev server you can run `npm start` which will start a webpack dev server with HMR

# Live Demo

You can view a live demo [here](https://react-code-splitting-example.vercel.app/). There's nothing spectacular about the interface, the application is just a proof of concept.
