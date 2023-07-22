import style from "./Header.module.scss";
import logo from "../../assets/img/logo_welbex.png";

import Navigation from "./navigation/Navigation";
import ContactInfo from "./contactInfo/ContactInfo";
import redBall from "../../assets/img/red_ball.png";
import purpleBall from "../../assets/img/purple_ball.png";

const Header = () => {
 return (
  <section>
   <div className={style.header}>
    <div className={style.purpleCircle} />
    <img src={redBall} className={style.redBall} />
    <img src={purpleBall} className={style.purpleBall} />
    <a href="" className={style.logo}>
     <img src={logo} alt="logo" />
    </a>
    <div className={style.mobile}>
     <Navigation />
    </div>
    <ContactInfo />
   </div>
   <div className={style.logoText}>
    крупный интегратор CRM в Росcии и ещё 8 странах
   </div>
  </section>
 );
};
export default Header;
