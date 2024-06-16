import { Link } from "react-router-dom";
import { navigation } from "@/staticData";

const NavigationSection = ({ status }: { status: boolean }) => {
  return (
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
                  <span className="scalex">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default NavigationSection;
