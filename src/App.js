import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./components/SideBar";

const AppLayout = () => {
  return (
    <>
      <div className="flex h-screen ">
        <Sidebar />
        <div className="flex flex-col flex-grow ">
          <Header />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};
// Here we are using outlet which will be replaced by the component depend upon the url we go to

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
