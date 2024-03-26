import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import BookDetails from "./pages/BookDetails/BookDetails.jsx";
import Home from "./pages/Home/Home.jsx";
import ListedBooks from "./pages/ListedBooks/ListedBooks.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Root from "./Routes/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book-details/:bookId",
        loader: () => fetch("/books.json"),
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/listed-books",
        loader: () => fetch("/books.json"),
        element: <ListedBooks></ListedBooks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
