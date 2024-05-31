import moment from "moment";

export const handleGetValueLocalStore = key => {
  const localString = localStorage.getItem(key);
  return localString ? JSON.parse(localString) : null;
};

export const handleSetValueLocalStore = (key, data) => {
  const dataString = JSON.stringify(data);
  localStorage.setItem(key, dataString);
};

export const getDateParts = (dateTime) => {
  const momentDate = moment(dateTime);
  const year = momentDate.year();
  const month = momentDate.month() + 1; // Tháng trong moment.js tính từ 0-11
  const day = momentDate.date();
  
  return { year, month, day };
};

export const getYouTubeVideoId = (url) => {
  const urlObj = new URL(url);
  return urlObj.searchParams.get('v');
};