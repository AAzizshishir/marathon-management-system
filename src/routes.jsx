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
import MarathonDetails from "./pages/marathonDetails/MarathonDetails";
import PrivateRoutes from "./privateRoutes/PrivateRoutes";
import Loader from "./components/loader/Loader";
import MarathonRegistration from "./pages/marathonRegistration/MarathonRegistration";

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
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoutes>
            <Marathon></Marathon>
          </PrivateRoutes>
        ),
      },
      {
        path: "/marathonDetails/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(
            `https://marathon-management-system-server-ten.vercel.app/allMarathons/${params.id}`
          ),
        element: <MarathonDetails></MarathonDetails>,
      },
      {
        path: "marathonRegistration/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(
            `https://marathon-management-system-server-ten.vercel.app/allMarathons/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <MarathonRegistration></MarathonRegistration>
          </PrivateRoutes>
        ),
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
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
        children: [
          {
            path: "addmarathon",
            element: (
              <PrivateRoutes>
                <AddMarathon></AddMarathon>
              </PrivateRoutes>
            ),
          },
          {
            path: "marathonlist",
            element: (
              <PrivateRoutes>
                <MyMarathonList></MyMarathonList>
              </PrivateRoutes>
            ),
          },
          {
            path: "applylist",
            element: (
              <PrivateRoutes>
                <MyApplyList></MyApplyList>
              </PrivateRoutes>
            ),
          },
        ],
      },
    ],
  },
]);

export default routes;
