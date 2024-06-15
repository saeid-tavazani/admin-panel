import { VscLayoutSidebarRightOff } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import Layout from "../ui/layout";
import { ModeToggle } from "../ui/modeToggle";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <header className="w-full border-b h-14 min-h-14">
      <Layout className="flex items-center h-full justify-between">
        <div className="flex items-center">
          <Button variant="link">
            <VscLayoutSidebarRightOff size={20} />
          </Button>
          <Button variant="link">
            <IoNotificationsOutline size={20} />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-40 rounded-md overflow-hidden h-7 bg-input flex items-center px-2">
            <CiSearch size={16} />
            <input
              type="text"
              className="bg-input text-sm w-[calc(100%-16px)] pr-1"
            />
          </div>
          <ModeToggle variant="link" />
        </div>
      </Layout>
    </header>
  );
};
export default Header;
