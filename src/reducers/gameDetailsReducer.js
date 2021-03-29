const initState = {
  gameDetail: { platforms: [] },
  gameSS: { results: [] },
  isLoading: true,
};

const gameDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        gameDetail: action.payload.gameDetail,
        gameSS: action.payload.gameSS,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
