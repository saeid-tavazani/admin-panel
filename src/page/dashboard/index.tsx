import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Aside from "@/components/dashboard/aside";
import Header from "@/components/dashboard/header";
import { useUserContext } from "@/context/userContext";

const Dashboard = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  const [sidebarStatus, setSidebarStatus] = useState(false);

  const toggleSidebarStatus = () => {
    setSidebarStatus(!sidebarStatus);
  };

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user]);
  return (
    <section className="w-full h-screen flex">
      <Aside status={sidebarStatus} />
      <section className="w-full h-full">
        <Header sidebarController={toggleSidebarStatus} />
        <article>
          <Outlet />
        </article>
      </section>
    </section>
  );
};

export default Dashboard;
