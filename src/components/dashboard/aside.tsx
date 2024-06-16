import { MdLogout } from "react-icons/md";
import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useUserContext } from "@/context/userContext";
import { Button } from "../ui/button";
import UserSection from "./userSection ";
import NavigationSection from "./NavigationSection";
const Aside = ({ status }: { status: boolean }) => {
  const { user } = useUserContext();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useGSAP(() => {
    const sidebarAnimation = {
      expanded: { minWidth: "14rem", width: "14rem", padding: "1.5rem" },
      collapsed: {
        minWidth: "fit-content",
        width: "fit-content",
        padding: "1.5rem 0.5rem",
      },
      mobileExpanded: {
        minWidth: "14rem",
        width: "14rem",
        padding: "1.5rem",
        right: 0,
      },
      mobileCollapsed: { right: "-100%" },
    };

    const scaleAnimation = {
      show: { scale: 1, display: "block", duration: "100ms", delay: "300ms" },
      hide: { scale: 0, display: "none", duration: "100ms", delay: "300ms" },
    };

    if (innerWidth > 760) {
      gsap.to(
        "#sidebar",
        status ? sidebarAnimation.expanded : sidebarAnimation.collapsed
      );
      gsap.to(".scalex", status ? scaleAnimation.show : scaleAnimation.hide);
    } else {
      gsap.to(
        "#sidebar",
        status
          ? sidebarAnimation.mobileExpanded
          : sidebarAnimation.mobileCollapsed
      );
      if (status) {
        gsap.to(".scalex", scaleAnimation.show);
      }
    }
  }, [status, innerWidth]);

  const handleVideoSrcSet = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  return (
    <aside
      id="sidebar"
      className={`border-l h-full flex flex-col gap-10 justify-between w-fit min-w-fit bg-background ${
        innerWidth < 760
          ? "absolute right-[-100%] h-[calc(100%-55.2px)] bottom-0 border-t"
          : ""
      }`}
    >
      <article
        className={`h-full overflow-y-auto overflow-x-hidden flex flex-col gap-10 ${
          !status ? "items-center" : ""
        }`}
      >
        <UserSection user={user} />
        <NavigationSection status={status} />
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
