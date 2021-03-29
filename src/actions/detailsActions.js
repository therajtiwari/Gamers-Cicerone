import axios from "axios";
import { gameDetailsURL } from "../api";
import { gameScreenshotsURL } from "../api";

const loadDetails = (id) => async (dispatch) => {
  // console.log(gameDetailsURL(id));

  dispatch({
    type: "LOADING",
  });
  const detailsData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotsURL(id));

  dispatch({
    type: "GET_DETAILS",
    payload: {
      gameDetail: detailsData.data,
      gameSS: screenshotData.data,
    },
  });
};

export default loadDetails;
