import React, { useEffect, useState } from "react";
import "./App.css";
import {
 convertTimeToText,
 convertToNormalizeDate,
 getTime,
} from "./timer.data";

function App() {
 const [time, setTime] = useState<ITime>(getTime());

 useEffect(() => {
  const interval = setInterval(() => {
   setTime(getTime());
  }, 1000);

  return () => clearInterval(interval);
 }, []);

 return (
  <div className="timer">
   <div className="timerNumber">
    <span>{convertToNormalizeDate(time.hour)} &nbsp;</span>
    <span>{convertToNormalizeDate(time.minute)}&nbsp;</span>
    <span>{convertToNormalizeDate(time.second)}</span>
   </div>
   <div className="timerText">
    <span>{convertTimeToText(time.hour, "hour")}&nbsp;</span>
    <span>{convertTimeToText(time.minute, "minute")}&nbsp;</span>
    <span>{convertTimeToText(time.second, "second")}</span>
   </div>
  </div>
 );
}

interface ITime {
 hour: number;
 minute: number;
 second: number;
}
export default App;
