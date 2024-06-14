import Aside from "@/components/dashboard/aside";
import Layout from "@/components/ui/layout";
import { ModeToggle } from "@/components/ui/modeToggle";

const Dashboard = () => {
  return (
    <section className="w-full h-screen flex">
      <Aside />
      <section className="w-full h-full overflow-y-auto">
        <header className="w-full border-b h-14">
          <Layout className="flex items-center h-full">
            <ModeToggle />
          </Layout>
        </header>
      </section>
    </section>
  );
};

export default Dashboard;
