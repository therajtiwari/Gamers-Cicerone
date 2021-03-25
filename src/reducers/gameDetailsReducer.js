const initState = { gameDetail: {}, gameSS: {} };

const gameDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        gameDetail: action.payload.gameDetail,
        gameSS: action.payload.gameSS,
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
