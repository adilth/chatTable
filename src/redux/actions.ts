export const UPDATE_MESSAGE = "UPDATE_MESSAGE";

export const updateMessage = (message: string) => {
  return {
    type: UPDATE_MESSAGE,
    payload: message,
  };
};
