import { useLayoutEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/Notfound/NotFound";
import Home from "./components/Home/Home";

let routing = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index:true, element: <Home/> },
      { path: "about", element: <About /> },
      {path:"projects", element:<Projects/>},
      {path:"contact", element:<Contact/>},
      {path:"*", element:<NotFound/>},
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
    </>
  );
}

export default App;
