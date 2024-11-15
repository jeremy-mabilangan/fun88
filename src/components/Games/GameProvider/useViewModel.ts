import list from "./List";
import { useHomepageContext } from "../../../common/context/useHomepageContext";
import { useCallback, useEffect, useMemo } from "react";
import { SET_GAME_PROVIDER } from "../../../common/app/config";
import { IGameProviders } from "../../../common/interface/games";

const ViewModel = () => {
  const { state, dispatch } = useHomepageContext();

  const gameProviders = useMemo(() => {
    return state?.gameProviders;
  }, [state]);

  const handleClose = useCallback(() => {
    dispatch({
      type: SET_GAME_PROVIDER,
      payload: { data: false, keys: "show" },
    });
  }, [dispatch]);

  const handleSelectProvider = useCallback(
    (id: number) => {
      const newList = gameProviders?.list?.reduce(
        (acc: IGameProviders[], cv: IGameProviders) => {
          if (cv.id === id) {
            acc.push({
              ...cv,
              isSelected:
                typeof cv.isSelected === "undefined" ? true : !cv.isSelected,
            });
          } else {
            acc.push(cv);
          }

          return acc;
        },
        []
      );

      const ids = newList?.filter((i) => i.isSelected).map((j) => j.id);

      ids &&
        dispatch({
          type: SET_GAME_PROVIDER,
          payload: { data: ids, keys: "selected" },
        });

      newList &&
        dispatch({
          type: SET_GAME_PROVIDER,
          payload: { data: newList, keys: "list" },
        });
    },
    [dispatch, gameProviders]
  );

  useEffect(() => {
    if (gameProviders?.list.length !== 0) return;

    dispatch({
      type: SET_GAME_PROVIDER,
      payload: { data: true, keys: "loading" },
    });
    setTimeout(() => {
      dispatch({
        type: SET_GAME_PROVIDER,
        payload: { data: list, keys: "list" },
      });
      dispatch({
        type: SET_GAME_PROVIDER,
        payload: { data: false, keys: "loading" },
      });
    }, 3000);

    // return () =>
    //   dispatch({
    //     type: SET_GAME_PROVIDER,
    //     payload: { data: [], keys: "list" },
    //   });
  }, [dispatch, gameProviders?.list.length]);

  return {
    gameProviders,
    handleClose,
    handleSelectProvider,
  };
};

export default ViewModel;
