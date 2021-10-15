const initState = {
  popular: [],
  latest: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        latest: action.payload.latest,
        upcoming: action.payload.upcoming,
      };

    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
