import { ReactNode } from "react";

type propsType = {
  className?: string;
  children: ReactNode;
};

const Layout = ({ className, children }: propsType) => {
  return (
    <section className={`container ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Layout;
