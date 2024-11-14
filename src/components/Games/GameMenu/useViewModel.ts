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
    const value = state?.searchedValue?.toLowerCase() || "";

    if (category !== "start") {
      return state?.games?.list.filter(
        (i) => i.category === category && i.name.toLowerCase().includes(value)
      );
    }

    return state?.games?.list.filter((i) =>
      i.name.toLowerCase().includes(value)
    );
  }, [state]);

  const handleFavorite = useCallback(
    (id: number) => {
      const newList = state?.games?.list?.reduce(
        (acc: IGames[], cv: IGames) => {
          if (cv.id === id) {
            acc.push({
              ...cv,
              isFavorite: !cv.isFavorite,
            });
          } else {
            acc.push(cv);
          }

          return acc;
        },
        []
      );

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

  return { gameList, handleFavorite, loading };
};

export default ViewModel;
