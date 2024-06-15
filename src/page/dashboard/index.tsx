import Aside from "@/components/dashboard/aside";
import Header from "@/components/dashboard/header";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="w-full h-screen flex">
      <Aside />
      <section className="w-full h-full">
        <Header />
        <article>
          <Outlet />
        </article>
      </section>
    </section>
  );
};

export default Dashboard;
