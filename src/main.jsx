import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const ErrorPage = lazy(() => import("./components/ErrorPage/ErrorPage.jsx"));
const Home = lazy(() => import("./components/Home/Home.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact.jsx"));
const About = lazy(() => import("./components/About/About.jsx"));
const ConceptCoveredInProject = lazy(() =>
  import("./components/ConceptCoveredInProject/ConceptCoveredInProject.jsx")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "coveredconcept",
        element: <ConceptCoveredInProject />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
