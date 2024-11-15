import { createContext, ReactNode, useReducer } from "react";
import {
  IContextProps,
  IHomepageContext,
} from "../interface/homepageContextProvider";
import { reducers } from "../reducers/homepageReducer";

export const initialState: IContextProps = {
  games: {
    loading: false,
    list: [],
    category: "start",
    search: "",
  },
  gameProviders: {
    loading: false,
    show: false,
    list: [],
    selected: [],
  },
};

export const HomepageRootContext = createContext<IHomepageContext>({
  state: initialState,
  dispatch: () => {},
});

type HomepageProviderProps = {
  children: ReactNode;
};

export const HomepageProvider = ({ children }: HomepageProviderProps) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <HomepageRootContext.Provider value={{ state, dispatch }}>
      {children}
    </HomepageRootContext.Provider>
  );
};
