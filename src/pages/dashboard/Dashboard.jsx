import { Outlet } from "react-router";
import Aside from "../../components/aside/Aside";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 border border-gray-600 w-11/12 mx-auto my-5">
      <aside className="col-span-3 border border-gray-600">
        <Aside></Aside>
      </aside>
      <main className="col-span-9 border border-gray-600">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
