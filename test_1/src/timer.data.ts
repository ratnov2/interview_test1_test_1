export const getTime = () => {
 const timeDate = new Date();

 const time = {
  hour: timeDate.getHours(),
  minute: timeDate.getMinutes(),
  second: timeDate.getSeconds(),
 };
 return time;
};
export const convertToNormalizeDate = (time: number) => {
 return time < 10 ? `0${time}` : time;
};

const declOfNum = (
 n: number,
 textForms: { var1: string; var2: string; var3: string }
) => {
 n = Math.abs(n) % 100;
 var n1 = n % 10;
 if (n > 10 && n < 20) {
  return textForms.var3;
 }
 if (n1 > 1 && n1 < 5) {
  return textForms.var2;
 }
 if (n1 == 1) {
  return textForms.var1;
 }
 return textForms.var3;
};
export const convertTimeToText = (
 number: number,
 type: "hour" | "minute" | "second"
) => {
 const timeText = declOfNum(number, timerDict[type]);
 if (number === 1) return `${timerDict[type].one} ${timeText}`;
 return `${number} ${timeText}`;
};

const timerDict = {
 hour: {
  var1: "час",
  var2: "часа",
  var3: "часов",
  one: "один",
 },
 minute: {
  var1: "минута",
  var2: "минуты",
  var3: "минут",
  one: "одна",
 },
 second: {
  var1: "секунда",
  var2: "секунды",
  var3: "секунд",
  one: "одна",
 },
};
