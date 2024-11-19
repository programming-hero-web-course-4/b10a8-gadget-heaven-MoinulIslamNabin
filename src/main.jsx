import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Dashboard from "./Components/Dashboard/Dashboard";
import Terms from "./Components/Terms/Terms";
import Details from "./Components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/Terms",
        element: <Terms></Terms>,
      },
      {
        path: "/Details/:DetailsId",
        loader: async ({ params }) => {
          const { DetailsId } = params;

          const response = await fetch("/allData.json");
          if (!response.ok) {
            return { error: "Failed to fetch data from server" };
          }

          const allData = await response.json();
          const item = allData.find((data) => data.id == DetailsId);

          if (!item) {
            return { error: "Item not found" };
          }

          return item;
        },
        element: <Details></Details>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
