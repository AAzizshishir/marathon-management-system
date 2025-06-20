import { Outlet } from "react-router";
import Aside from "../../components/aside/Aside";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div className="md:grid grid-cols-12 gap-4 m-5 min-h-screen">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <aside className="col-span-2 bg-neutral text-white opacity-85 p-4 rounded-md">
        <Aside></Aside>
      </aside>
      <main className="col-span-10">
        <h2 className="text-center">This is Dashboard</h2>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
