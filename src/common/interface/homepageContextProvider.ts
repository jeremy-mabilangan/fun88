import { Dispatch } from "react";
import { IGameProviders, IGames } from "./games";

export interface IContextProps {
  games: {
    loading: boolean;
    list: IGames[];
    category: string;
    search: string;
  };
  gameProviders: {
    loading: boolean;
    show: boolean;
    list: IGameProviders[];
    selected: number[];
  };
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
      payload: { data: string; keys: "search" };
    }
  | {
      type: "SET_GAME";
      payload: { data: boolean; keys: "loading" };
    }
  | { type: "SET_GAME_PROVIDER"; payload: { data: boolean; keys: "show" } }
  | { type: "SET_GAME_PROVIDER"; payload: { data: boolean; keys: "loading" } }
  | {
      type: "SET_GAME_PROVIDER";
      payload: { data: IGameProviders[]; keys: "list" };
    }
  | {
      type: "SET_GAME_PROVIDER";
      payload: { data: number[]; keys: "selected" };
    };
