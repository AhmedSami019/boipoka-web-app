import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import BookDetails from "../Pages/BookDetails/BookDetails";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("booksData.json"),
        Component: Home,
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "bookDetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails
      }
    ],
  },
]);
