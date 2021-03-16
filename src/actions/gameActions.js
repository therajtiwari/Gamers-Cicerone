import axios from "axios";
import { popularGamesURL } from "../api";

//action creator

export const loadGames = () => async (dis) => {
  //fetch data with axios
  const popularGamesData = await axios.get(popularGamesURL());
  dis({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
    },
  });
};

// export default loadGames;
