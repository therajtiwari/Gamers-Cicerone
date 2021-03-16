const base_url = "https://api.rawg.io/api/";

// current Date

const getCurrentDate = () => {
  const date = new Date().getDate();

  if (date < 10) return `0${date}`;
  else return date;
};

// current month
const getCurrentMonth = () => {
  const month = new Date().getMonth();
  if (month < 10) return `0${month}`;
  else return month;
};
// current year
function getCurrentYear() {
  const year = new Date().getFullYear();
  return year;
}

const dateToday = getCurrentDate();
const monthToday = getCurrentMonth();
const yearToday = getCurrentYear();

const currentDateToday = yearToday + "-" + monthToday + "-" + dateToday;
const prevYearDateToday = yearToday - 1 + "-" + monthToday + "-" + dateToday;
const nextYearDateToday = yearToday + 1 + "-" + monthToday + "-" + dateToday;

const games_url =
  base_url + "games?dates=" + prevYearDateToday + "," + currentDateToday;

console.log(games_url);
