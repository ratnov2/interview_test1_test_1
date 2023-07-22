import style from "./OtherInfo.module.scss";

const OtherInfo = () => {
 return (
  <div className={style.otherInfo}>
   <h3>
    <span className={style.text}>Вместе с </span>
    <span className={style.grad}>
     бесплатной <br /> консультацией
    </span>
    <span className={style.text}>&nbsp;мы дарим:</span>
   </h3>
   <div className={style.container}>
    <ul>
     <li>
      <h4>Виджеты</h4>
      <p>
       30 готовых <br />
       решений
      </p>
     </li>
     <li>
      <h4>Dashboard</h4>
      <p>
       с показателями <br /> вашего бизнеса
      </p>
     </li>
     <li>
      <h4>Skype Аудит</h4>
      <p>
       отдела продажи <br />
       CRM системы
      </p>
     </li>
     <li>
      <h4>35 дней</h4>
      <p>
       использования <br />
       CRM
      </p>
     </li>
    </ul>
   </div>
   <div className={style.button}>
    <button>Получить консультацию</button>
   </div>
  </div>
 );
};

export default OtherInfo;
