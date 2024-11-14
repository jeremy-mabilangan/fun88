import { Dispatch } from "react";
import { IGames } from "./games";
import { IGameProviders } from "../../components/Games/GameMenu/interface";

export interface IContextProps {
  games: {
    loading: boolean;
    list: IGames[];
    category: string;
  };
  gameProviders: {
    loading: boolean;
    show: boolean;
    list: IGameProviders[];
  };
  searchedValue: string;
}

export interface IHomepageContext {
  state: IContextProps | null;
  dispatch: Dispatch<TAction>;
}

export type TAction =
  | {
      type: "SET_GAME";
      payload: { data: IGames[]; keys: "list" };
    }
  | {
      type: "SET_GAME";
      payload: { data: string; keys: "category" };
    }
  | {
      type: "SET_GAME";
      payload: { data: boolean; keys: "loading" };
    }
  | { type: "SET_SEARCHED_VALUE"; payload: string }
  | { type: "SET_GAME_PROVIDER"; payload: { data: boolean; keys: "show" } }
  | { type: "SET_GAME_PROVIDER"; payload: { data: boolean; keys: "loading" } }
  | {
      type: "SET_GAME_PROVIDER";
      payload: { data: IGameProviders[]; keys: "list" };
    };
