import {
  REDUX_ACTION_ADD,
  REDUX_ACTION_REM,
  REDUX_ACTION_CLR,
} from "../../Constants";

export const setStateToAdd = () => ({
  type: REDUX_ACTION_ADD,
});

export const setStateToRem = () => ({
  type: REDUX_ACTION_REM,
});

export const setStateToClr = (payload) => ({
  type: REDUX_ACTION_CLR,
  payload: payload,
});

export const add = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setStateToAdd());
    }, 1000);
  };
};

export const remove = () => {
  return (dixpatch) => {
    dixpatch(setStateToRem());
  };
};

export const clear = (payload) => {
  return (dispatch) => {
    dispatch(setStateToClr(payload));
  };
};
