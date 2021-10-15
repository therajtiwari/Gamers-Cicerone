import axios from "axios";
import { popularGamesURL, latest_gamesURL, upcomingGamesURL, searchedGamesURL } from "../api";

//action creator

export const loadGames = () => async (dis) => {
  //fetch data with axios
  // console.log(popularGamesURL());
  // console.log(upcomingGamesURL());
  // console.log(latest_gamesURL());
  const popularGamesData = await axios.get(popularGamesURL());
  const latestGamesData = await axios.get(latest_gamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  // console.log(popularGamesData, latestGamesData, upcomingGamesData);

  dis({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      latest: latestGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    },
  });
};


export const loadSearchedGames = (search, numOfResults) => async (dis) => {
  // console.log(searchedGamesURL(search));
  if (search.length > 0) {
    const searchedGamesData = await axios.get(searchedGamesURL(search, numOfResults));
    console.log(searchedGamesData);
    dis({
      type: "FETCH_SEARCHED",
      payload: { searched: searchedGamesData.data.results },
    });
  }
  else {
    dis({
      type: "FETCH_SEARCHED",
      payload: { searched: [] },
    });
  }
};
export default loadGames;
