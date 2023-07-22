import { FC } from "react";
import telegramIcon from "../../../assets/img/telegram.svg";
import viberIcon from "../../../assets/img/viber.svg";
import whatsUpIcon from "../../../assets/img/whatsapp.svg";
import style from "./SvgNavigation.module.scss";

const SvgNavigation: FC<{ styleShare?: string }> = ({
 styleShare,
}) => {
 return (
  <ul className={`${style.ul} ${styleShare}`}>
   <li>
    <a href="">
     <img src={telegramIcon} />
    </a>
   </li>
   <li>
    <a href="">
     <img src={viberIcon} />
    </a>
   </li>
   <li>
    <a href="">
     <img src={whatsUpIcon} />
    </a>
   </li>
  </ul>
 );
};
export default SvgNavigation;
