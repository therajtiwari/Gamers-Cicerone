import axios from "axios";
import { popularGamesURL, latest_gamesURL, upcomingGamesURL } from "../api";

//action creator

export const loadGames = () => async (dis) => {
  //fetch data with axios
  console.log(popularGamesURL());
  console.log(upcomingGamesURL());
  console.log(latest_gamesURL());
  const popularGamesData = await axios.get(popularGamesURL());
  const latestGamesData = await axios.get(latest_gamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());

  dis({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      latest: latestGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    },
  });
};

export default loadGames;
