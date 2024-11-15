import { useMemo } from "react";
import { useHomepageContext } from "../../../../common/context/useHomepageContext";
import { IGameProviders } from "../../../../common/interface/games";

const ViewModel = () => {
  const { state } = useHomepageContext();

  const gameProviders = useMemo(() => {
    const selectedGameProvider = state?.gameProviders.selected;
    let list = state?.gameProviders.list as IGameProviders[];

    if (selectedGameProvider?.length) {
      const selectedObj: { [x: number]: number } = {};
      selectedGameProvider.forEach((s) => (selectedObj[s] = s));
      return list?.filter((l) => selectedObj[l.id]);
    }

    return [];
  }, [state?.gameProviders]);

  return {
    gameProviders,
  };
};

export default ViewModel;
