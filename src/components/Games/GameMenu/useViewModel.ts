import { useCallback, useEffect, useMemo } from "react";
import { useHomepageContext } from "../../../common/context/useHomepageContext";
import List from "./List";
import { SET_GAME } from "../../../common/app/config";
import { IGames } from "../../../common/interface/games";

const ViewModel = () => {
  const { state, dispatch } = useHomepageContext();

  const loading = useMemo(() => {
    return state?.games?.loading;
  }, [state]);

  const gameList = useMemo(() => {
    const category = state?.games?.category;
    const value = state?.games?.search?.toLowerCase() || "";
    const selectedGameProvider = state?.gameProviders?.selected;
    let list = state?.games?.list;

    if (selectedGameProvider?.length) {
      const selectedObj: { [x: number]: number } = {};
      selectedGameProvider.forEach((s) => (selectedObj[s] = s));
      list = list?.filter((l) => selectedObj[l.provider]);
    }

    if (category !== "start") {
      return list?.filter(
        (i) => i.category === category && i.name.toLowerCase().includes(value)
      );
    }

    return list?.filter((i) => i.name.toLowerCase().includes(value));
  }, [state]);

  const gameProviders = useMemo(() => {
    return state?.gameProviders;
  }, [state]);

  const handleFavorite = useCallback(
    (id: number) => {
      const newList = state?.games?.list.reduce((acc: IGames[], cv: IGames) => {
        if (cv.id === id) {
          acc.push({
            ...cv,
            isFavorite:
              typeof cv.isFavorite === "undefined" ? true : !cv.isFavorite,
          });
        } else {
          acc.push(cv);
        }

        return acc;
      }, []);

      newList &&
        dispatch({ type: SET_GAME, payload: { data: newList, keys: "list" } });
    },
    [dispatch, state]
  );

  useEffect(() => {
    dispatch({ type: SET_GAME, payload: { data: true, keys: "loading" } });
    setTimeout(() => {
      dispatch({ type: SET_GAME, payload: { data: List, keys: "list" } });
      dispatch({ type: SET_GAME, payload: { data: false, keys: "loading" } });
    }, 3000);
  }, [dispatch]);

  return { gameList, handleFavorite, loading, gameProviders };
};

export default ViewModel;
