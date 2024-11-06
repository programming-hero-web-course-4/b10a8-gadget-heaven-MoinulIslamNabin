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
          const [
            allData,
            phoneData,
            accessories,
            iphone,
            laptop,
            macBook,
            smartWatches,
          ] = await Promise.all([
            fetch("./allData.json").then((res) => res.json()),
            fetch("./phone.json").then((res) => res.json()),
            fetch("./accessories.json").then((res) => res.json()),
            fetch("./iphone.json").then((res) => res.json()),
            fetch("./laptop.json").then((res) => res.json()),
            fetch("./macBook.json").then((res) => res.json()),
            fetch("./smartWatches.json").then((res) => res.json()),
          ]);

          
          const combinedData = [
            ...allData,
            ...phoneData,
            ...accessories,
            ...iphone,
            ...laptop,
            ...macBook,
            ...smartWatches,
          ];
          const selectedItem = combinedData.find(
            (item) => item.id === DetailsId
          );
          return selectedItem;
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
