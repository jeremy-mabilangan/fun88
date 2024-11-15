import { useEffect, useMemo } from "react";
import { useHomepageContext } from "../../common/context/useHomepageContext";

const ViewModel = () => {
  const { state } = useHomepageContext();

  const gameProviders = useMemo(() => {
    return state?.gameProviders;
  }, [state]);

  useEffect(() => {
    if (gameProviders?.show) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [gameProviders?.show]);

  return {
    gameProviders,
  };
};

export default ViewModel;
