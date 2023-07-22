import style from "./ContactInfo.module.scss";
import SvgNavigation from "./SvgNavigation";

const ContactInfo = () => {
 return (
  <div className={style.contactInfo}>
   <ul>
    <li className={style.firstLi}>
     <a href="tel:+75555555555">+7&nbsp;555&nbsp;555-55-55</a>
    </li>
    <SvgNavigation styleShare={style.styleShare} />
   </ul>
  </div>
 );
};
export default ContactInfo;
