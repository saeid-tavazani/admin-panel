import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { navigation } from "@/staticData";
import { useUserContext } from "@/context/userContext";
import { Button } from "../ui/button";
const Aside = ({ status }: { status: boolean }) => {
  const { user } = useUserContext();
  return (
    <aside
      className={`${
        status ? "min-w-56 w-56 p-6" : "w-fit min-w-fit px-2 py-6"
      } border-l h-full flex flex-col gap-10  justify-between`}
    >
      <article
        className={`h-full overflow-y-auto flex flex-col gap-10 ${
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
          {status && <span className="text-sm">{user?.name}</span>}
        </div>
        <div className="flex flex-col gap-6">
          {navigation.map(({ category, links }) => (
            <div className="flex flex-col gap-3" key={category}>
              {status && (
                <span className="font-bold text-sm text-primary dark:text-pale-blue">
                  {category}
                </span>
              )}

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
                      {status && item.title}
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
          {status && "خروج"}
        </Button>
      </article>
    </aside>
  );
};
export default Aside;
