import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Aside from "@/components/dashboard/aside";
import Header from "@/components/dashboard/header";
import { useUserContext } from "@/context/userContext";

const Dashboard = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user]);
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
