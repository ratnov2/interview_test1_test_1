import CustomLink from "../../footer/ui/FooterLink";
import style from "./Navigation.module.scss";

const Navigation = () => {
 return (
  <nav className={style.nav}>
   <ul>
    <CustomLink href="" title="Услуги" />
    <CustomLink href="" title="Виджеты" />
    <CustomLink href="" title="Интеграции" />
    <CustomLink href="" title="Кейсы" />
    <CustomLink href="" title="Сертификаты" />
   </ul>
  </nav>
 );
};
export default Navigation;
