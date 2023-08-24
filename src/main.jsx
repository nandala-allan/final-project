import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import Form from "./components/Form";
// import SearchForm from "./components/SearchForm";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
// import App from "./App";
import Navigation from "./components/Navigation";
// import Home from "./components/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/Home",
//     element: <Home />,
//   },

//   {
//     path: "/Form",
//     element: <Form />,
//   },
//   {
//     path: "/SearchForm",
//     element: <SearchForm />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-j4uwdcalctzz2u7s.us.auth0.com"
      clientId="Ke1JqD7iN0rJnHAOInDhTRAQXz36xYGI"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Navigation />
        {/* <App /> */}
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
