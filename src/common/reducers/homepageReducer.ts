import { SET_GAME, SET_GAME_PROVIDER, SET_SEARCHED_VALUE } from "../app/config";
import { TAction } from "../interface/homepageContextProvider";

export const reducers = (state: any, action: TAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GAME:
      return {
        ...state,
        games: {
          ...state.games,
          [payload.keys]: payload.data,
        },
      };
    case SET_GAME_PROVIDER:
      return {
        ...state,
        gameProviders: {
          ...state.gameProviders,
          [payload.keys]: payload.data,
        },
      };
    case SET_SEARCHED_VALUE:
      return {
        ...state,
        searchedValue: payload,
      };
    default:
      return state;
  }
};