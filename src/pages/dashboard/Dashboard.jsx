import { Outlet } from "react-router";
import Aside from "../../components/aside/Aside";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 border border-gray-600  m-5">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <aside className="col-span-2 border border-gray-600">
        <Aside></Aside>
      </aside>
      <main className="col-span-10 border border-gray-600">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
