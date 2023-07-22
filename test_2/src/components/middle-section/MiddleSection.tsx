import style from "./MiddleSection.module.scss";
import MainInfo from "./main-info/MainInfo";
import OtherInfo from "./other-info/OtherInfo";
import redBall from "../../assets/img/red_ball.png";

const MiddleSection = () => {
 return (
  <div className={style.section}>
   <img src={redBall} className={style.redBall} />
   <div className={style.nose} />
   <div className={style.grad} />
   <div className={style.middleSection}>
    <MainInfo />
    <OtherInfo />
   </div>
  </div>
 );
};
export default MiddleSection;
