import { FC, ReactNode } from "react";
import style from "./Layout.module.scss";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
 return (
  <div>
   <div className={style.layout}>{children}</div>
  </div>
 );
};
export default Layout;
