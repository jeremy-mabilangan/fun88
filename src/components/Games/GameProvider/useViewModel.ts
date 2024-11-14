import list from "./List";
import { useHomepageContext } from "../../../common/context/useHomepageContext";
import { useCallback, useEffect, useMemo } from "react";
import { SET_GAME_PROVIDER } from "../../../common/app/config";

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

  useEffect(() => {
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
  }, [dispatch]);

  return {
    gameProviders,
    handleClose,
  };
};

export default ViewModel;
