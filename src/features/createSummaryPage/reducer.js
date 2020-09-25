const initialState = {
  activeStep: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `RESET`:
      return initialState;
    case `SET_ACTIVE_MENU_STEP`:
      return {
        ...state,
        activeStep: action.payload
      };
    default:
      return initialState;
  }
};

export default reducer;
