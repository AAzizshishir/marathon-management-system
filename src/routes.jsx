import { createBrowserRouter } from "react-router";
import Root from "./rootLayout/Root";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import AddMarathon from "./pages/dashboard/addmarathon/AddMarathon";
import MyMarathonList from "./pages/dashboard/mymarathonlist/MyMarathonList";
import MyApplyList from "./pages/dashboard/myapplylist/MyApplyList";
import Marathon from "./pages/marathon/Marathon";
// import DashboardLayout from "./dashboardLayout/DashboardLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "marathon",
        Component: Marathon,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "dashboard",
        Component: Dashboard,
        children: [
          {
            path: "addmarathon",
            Component: AddMarathon,
          },
          {
            path: "marathonlist",
            Component: MyMarathonList,
          },
          {
            path: "applylist",
            Component: MyApplyList,
          },
        ],
      },
    ],
  },
]);

export default routes;
