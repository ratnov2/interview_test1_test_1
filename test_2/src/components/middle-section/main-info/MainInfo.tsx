import style from "./MainInfo.module.scss";

const MainInfo = () => {
 return (
  <div className={style.mainInfo}>
   <div className={style.redBlur} />
  
   <h1 className={style.title}>
    Зарабатывайте <br /> больше
   </h1>
   <h1 className={style.welbex}>
    c <span>welbex</span>
   </h1>
   <p>
    Развиваем и контролируем
    <br /> продажи за вас
   </p>
  </div>
 );
};
export default MainInfo;
