import { createContext, ReactNode, useReducer } from "react";
import {
  IContextProps,
  IHomepageContext,
  TAction,
} from "../interface/homepageContextProvider";
import { reducers } from "../reducers/homepageReducer";

export const initialState: IContextProps = {
  games: {
    loading: false,
    list: [],
    category: "start",
  },
  gameProviders: {
    loading: false,
    show: false,
    list: [],
  },
  searchedValue: "",
};

export const HomepageRootContext = createContext<IHomepageContext>({
  state: initialState,
  dispatch: () => {},
});

export const HomepageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<React.Reducer<IContextProps, TAction>>(
    reducers,
    initialState
  );

  return (
    <HomepageRootContext.Provider value={{ state, dispatch }}>
      {children}
    </HomepageRootContext.Provider>
  );
};
