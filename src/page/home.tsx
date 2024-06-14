import Layout from "@/components/ui/layout";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { ModeToggle } from "@/components/ui/modeToggle";
const Home = () => {
  return (
    <Layout className="h-screen flex items-center justify-center flex-col gap-7">
      <h1 className="text-2xl font-bold">سلام من سعید توازانی هستم</h1>
      <p className="text-base lg:w-1/2 text-center">
        این پروژه یک پنل ادمین مدرن و کاربرپسند است که با تمرکز بر سادگی استفاده
        و تجربه کاربری بهینه طراحی شده است. کاربران می‌توانند به راحتی داده‌ها
        را مدیریت کرده و به اطلاعات مورد نیاز خود دسترسی پیدا کنند.
      </p>
      <div className="flex items-center gap-3">
        <Link
          className="bg-primary hover:bg-primary/90 px-3 py-2 rounded-md text-sm flex gap-2 items-center transition-all text-background"
          to="/signin"
        >
          <FaPlayCircle size={25} />
          پیش نمایش
        </Link>
        <a
          target="_blank"
          href="https://github.com/saeid-tavazani/admin-panel"
          className="border border-input bg-background hover:bg-accent hover:text-accent-foreground flex gap-2 items-center px-4 py-2 rounded-md text-sm transition-all"
        >
          <FaGithub size={25} />
          GitHub
        </a>
        <ModeToggle />
      </div>
    </Layout>
  );
};

export default Home;
