import SvgNavigation from "../header/contactInfo/SvgNavigation";
import style from "./Footer.module.scss";
import { FooterData } from "./footer.data";
import CustomLink from "./ui/FooterLink";

const Footer = () => {
 return (
  <footer>
   <div className={style.footer}>
    <div className={style.firstUl}>
     <ul>
      <li className={style.head}>О компании</li>
      <CustomLink href="" title="Партнёрская программа" />
      <CustomLink href="" title="Вакансии" />
     </ul>
     <ul>
      <li className={style.head}>Меню</li>
      <div className={style.menu}>
       {FooterData.menu.map((el) => (
        <CustomLink href={el.href} title={el.title} />
       ))}
      </div>
     </ul>
     <ul className={style.lastUl}>
      <li className={style.head}>Контакты</li>
      <a href="tel:+75555555555">+7 555 555-55-55</a>
      <li className={style.svgNavigation}>
       <SvgNavigation styleShare={style.styleShare} />
      </li>
      <CustomLink href="" title="Москва, Путевой проезд 3с1, к 902" />
     </ul>
    </div>
   </div>
   <div className={style.copyright}>
    <p>©WELBEX 2022. Все права защищены.</p>
    <a href="">Политика конфиденциальности</a>
   </div>
  </footer>
 );
};

export default Footer;
