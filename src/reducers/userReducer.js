const initUserState = {
  name: "",
  isLogged: false,
};

const userReducer = (state = initUserState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default userReducer;
