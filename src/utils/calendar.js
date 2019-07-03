// 0: 日曜日, 1:月曜日, ..., 6:土曜日
export const zeller = (year, month, day) => {
  let a = parseInt((14 - month) / 12);
  let y = (year - a);
  let m = (month + (12 * a) - 2);
  let h = parseInt(((day + y + parseInt(y / 4)) - parseInt(y / 100) + parseInt(y / 400) + (31 * m) / 12) % 7);
  return h;
};
// zellerよりgetUTCDay()を使うべき

export const getMonthDays = (year, month) => {  
  return new Date(year, month, 0).getDate();
};