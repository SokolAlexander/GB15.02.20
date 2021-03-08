import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_FAILURE,
  GET_ARTICLES_SUCCESS,
} from "./actions";
import { STATUSES } from "../../utils/constants";

const initialState = {
  articles: [],
  request: STATUSES.IDLE,
  error: null,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        request: STATUSES.SUCCESS,
      };
    case GET_ARTICLES_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReducer;
