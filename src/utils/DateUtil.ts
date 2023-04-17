/**
 * DateをYYYY/MM/DD形式の文字列で取得する
 * @param date
 */
const toDateString = (date: Date) => {
  const convertedDate = new Date(date); /** 常にその日であることを確認してください */
  const y = convertedDate.getFullYear();
  const m = ("00" + (convertedDate.getMonth() + 1)).slice(-2);
  const d = ("00" + convertedDate.getDate()).slice(-2);
  const result = `${y}/${m}/${d}`;
  return result;
};

/**
 * DateをHH:MM形式の文字列で取得する
 * @param date
 */
const toTimeString = (date: Date) => {
  const convertedDate = new Date(date); /** 常にその日であることを確認してください */
  const h = ("00" + convertedDate.getHours()).slice(-2);
  const m = ("00" + convertedDate.getMinutes()).slice(-2);
  const result = `${h}:${m}`;
  return result;
};

/**
 * DateをYYYY/MM/DD HH:MM形式の文字列で取得する
 * @param date
 */
const toDateTimeString = (date: Date) => {
  const day = toDateString(date);
  const time = toTimeString(date);
  const result = `${day} ${time}`;
  return result;
};
/**
 * DateをYYYY/MM形式の文字列で取得する
 * @param date
 */
const toYearMonthString = (date: Date) => {
  const y = date.getFullYear();
  const m = ("00" + (date.getMonth() + 1)).slice(-2);
  const result = `${y}/${m}`;
  return result;
};

/**
 * DateをYYYYMMDDhhmmss形式の文字列で取得する
 * @param date
 */
const toDateFullTimeString = (date: Date) => {
  const year = date.getFullYear();
  const month = ("00" + (date.getMonth() + 1)).slice(-2);
  const day = ("00" + date.getDate()).slice(-2);
  const hour = ("00" + date.getHours()).slice(-2);
  const min = ("00" + date.getMinutes()).slice(-2);
  const sec = ("00" + date.getSeconds()).slice(-2);
  const result = `${year}${month}${day}${hour}${min}${sec}`;
  return result;
};

/** 日付処理 */
export default {
  toTimeString,
  toDateString,
  toDateTimeString,
  toYearMonthString,
  toDateFullTimeString,
};
