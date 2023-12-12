import { UPDATE_MESSAGE } from "./actions";

const initialState = {
  message: "",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state = initialState, action: any) => {
  if (!action && action)
    switch (action.type) {
      case UPDATE_MESSAGE:
        return {
          ...state,
          message: action.payload,
        };
      default:
        return state;
    }
};

export default reducer;
