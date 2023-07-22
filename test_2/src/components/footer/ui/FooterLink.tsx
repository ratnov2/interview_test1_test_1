import { FC } from "react";
import style from "./FooterLink.module.scss";

const CustomLink: FC<{ href: string; title: string }> = ({ href, title }) => {
 return (
  <li className={style.link}>
   <a href={href}>{title}</a>
  </li>
 );
};
export default CustomLink;
