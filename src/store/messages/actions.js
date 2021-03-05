import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});

export const addMessageThunk = (chatId, message) => (dispatch, getState) => {
  dispatch(addMessage(chatId, message));
  console.log('0-0-0-0-0-0-00', message.author);

  if (message.author !== AUTHORS.BOT) {
    setTimeout(() => {
      console.log('jhjhjhjhjh');
      dispatch(addMessage(chatId, { text: 'Hello', author: AUTHORS.BOT }));
    }, 1000);
  }
};
