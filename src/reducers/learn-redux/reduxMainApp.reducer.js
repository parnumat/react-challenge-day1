import {
  REDUX_ACTION_ADD,
  REDUX_ACTION_REM,
  REDUX_ACTION_CLR,
} from "../../Constants";

const initialState = {
  count: 0,
  account: { username: "admin", password: "1234" },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REDUX_ACTION_ADD:
      return { ...state, count: state.count + 1 };
    case REDUX_ACTION_REM:
      return { ...state, count: state.count - 1 };
    case REDUX_ACTION_CLR:
      return { ...state, count: payload };

    default:
      return state;
  }
};
