const monthsList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function setCookie(cname: string, cvalue: string, exhrs: number) {
  const d = new Date();
  d.setTime(d.getTime() + exhrs * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname: string) {
  if (typeof document === "undefined") return "";
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      const cookie = c.substring(name.length, c.length);
      return cookie;
    }
  }
  return "";
}

export const convertToTitleCase = (str: string) => {
  try {
    const splitStr = String(str).toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const getDate = (stamp: number) => {
  const dateValue = new Date(stamp * 1000);
  return dateValue.toString();
};
export const dateToTimeString = (date: Date) => {
  let h = date.getHours();
  let m: number | string = date.getMinutes();
  const t = h >= 12 ? "pm" : "am";
  h = h % 12;
  h = h ? h : 12;
  m = m < 10 ? "0" + m : m;
  return h + ":" + m + " " + t;
};
export const epochToDateTimeString = (epoch: string) => {
  try {
    const utcSeconds = Math.floor(parseInt(epoch));
    const date = new Date(0);
    date.setUTCSeconds(utcSeconds);
    return (
      date.getDate() +
      " " +
      monthsList[date.getMonth()] +
      " " +
      date.getFullYear() +
      ", " +
      dateToTimeString(date)
    );
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const getNameFromEmail = (email: string) => {
  if (!email || typeof email !== "string") return "";
  const regex = /^[^@]+/;
  const match = email.match(regex);
  return match ? match[0] : email;
};
