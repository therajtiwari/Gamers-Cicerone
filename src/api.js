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

//popular games
const popular_games = `games?api=${process.env.REACT_APP_API}&dates=${prevYearDateToday},${currentDateToday}&ordering=-rating&page_size=10`;
const upcoming_games = `games?api=${process.env.REACT_APP_API}&dates=${currentDateToday},${nextYearDateToday}&ordering=-added&page_size=10`;
const latest_games = `games?api=${process.env.REACT_APP_API}&dates=${prevYearDateToday},${currentDateToday}&orderin=-released&page_size=10`;

export const popularGamesURL = () => base_url + popular_games;
export const upcomingGamesURL = () => base_url + upcoming_games;
export const latest_gamesURL = () => base_url + latest_games;

// console.log(popularGamesURL());
// console.log(upcomingGamesURL())
// console.log(latest_gamesURL());
