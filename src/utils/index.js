
export const getTimefromUnix = (unix) => {
  const hours = new Date(unix * 1000).getHours();
  const minutes = new Date(unix * 1000).getMinutes();
  const twoDigitMinutes = minutes.toString().padStart(2, "0");
  return `${hours}:${twoDigitMinutes}`;
  };

export const filterForecast = (data) => {
    return data.filter((_, index) => index % 8 === 0);
};

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];     
  const months = [
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

export const getDayfromUnix = (unix) => {
    const date = new Date(unix * 1000);
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  };

