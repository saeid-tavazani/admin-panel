import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navigation } from "@/staticData";
import { useUserContext } from "@/context/userContext";
import { Button } from "../ui/button";
const Aside = ({ status }: { status: boolean }) => {
  const { user } = useUserContext();
  useGSAP(() => {
    if (status) {
      gsap.to("#sidebar", {
        minWidth: "14rem",
        width: "14rem",
        padding: "1.5rem",
      });
      gsap.to(".scalex", {
        scale: 1,
        display: "block",
        duration: "100ms",
        delay: "300ms",
      });
    } else {
      gsap.to("#sidebar", {
        minWidth: "fit-content",
        width: "fit-content",
        padding: "1.5rem 0.5rem",
      });
      gsap.to(".scalex", {
        scale: 0,
        display: "none",
        duration: "100ms",
        delay: "300ms",
      });
    }
  }, [status]);

  return (
    <aside
      id="sidebar"
      className={` border-l h-full flex flex-col gap-10 justify-between w-fit min-w-fit`}
    >
      <article
        className={`h-full overflow-y-auto overflow-x-hidden flex flex-col gap-10 ${
          !status ? "items-center" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          {user?.profile ? (
            <img
              src={user.profile}
              alt="profile"
              className="w-[25px rounded-full]"
            />
          ) : (
            <FaUserCircle
              size={25}
              className="text-dark-semi-transparent-black dark:text-foreground"
            />
          )}
          <span className="text-sm scalex">{user?.name}</span>
        </div>
        <div className="flex flex-col gap-6">
          {navigation.map(({ category, links }) => (
            <div className="flex flex-col gap-3" key={category}>
              <span className="font-bold text-sm text-primary dark:text-pale-blue scalex">
                {category}
              </span>

              <ul className="flex flex-col gap-1 w-full">
                {links.map((item) => (
                  <li key={item.slug} className="w-full">
                    <Link
                      to={item.slug}
                      className={`flex items-center gap-2 text-sm rounded-md h-9 ${
                        status ? "px-5" : "px-3"
                      } transition-all hover:bg-card`}
                    >
                      <item.icon size={20} />
                      <span className="scalex"> {item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
      <article className="min-h-fit">
        <Button
          variant="link"
          className="w-full flex items-center gap-2 text-destructive text-sm justify-start"
        >
          <MdLogout size={20} />
          <span className="scalex">خروج</span>
        </Button>
      </article>
    </aside>
  );
};
export default Aside;
