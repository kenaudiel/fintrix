import DashboardLayout from "@/layouts/dashboard-layout";
import HomePage from "@/pages/home-page";
import { createBrowserRouter } from "react-router";

export const route = createBrowserRouter([
  {
    path:'/',
    element:<DashboardLayout/>,
    children: [
      {
        index:true,
        element:<HomePage/>
      }
    ]
  }
])