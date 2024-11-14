import { ReactComponent as Fire } from "../../../common/assets/icons/fire.svg";
import { ReactComponent as New } from "../../../common/assets/icons/new.svg";
import { ReactComponent as Slots } from "../../../common/assets/icons/slots.svg";
import { ReactComponent as Live } from "../../../common/assets/icons/live.svg";
import { ReactComponent as Jackpots } from "../../../common/assets/icons/jackpots.svg";
import { ReactComponent as Card } from "../../../common/assets/icons/card.svg";
import { ReactComponent as Coin } from "../../../common/assets/icons/coin.svg";
import { ReactComponent as Square } from "../../../common/assets/icons/app_square.svg";
import { useCallback, useState } from "react";
import { IButtons } from "../../../common/interface/buttons";
import { useHomepageContext } from "../../../common/context/useHomepageContext";
import {
  SET_GAME,
  SET_GAME_PROVIDER,
  SET_SEARCHED_VALUE,
} from "../../../common/app/config";
import { debounce } from "../../../common/helpers";

const ViewModel = () => {
  const { dispatch } = useHomepageContext();

  const [buttons, setButtons] = useState<IButtons[]>([
    { title: "start", Icon: Fire, active: true },
    { title: "new", Icon: New, active: false },
    { title: "slots", Icon: Slots, active: false },
    { title: "live", Icon: Live, active: false },
    { title: "jackpots", Icon: Jackpots, active: false },
    { title: "table games", Icon: Card, active: false },
    { title: "bingo", Icon: Coin, active: false },
    { title: "others", Icon: Square, active: false },
  ]);

  const [searchActive, setSearchActive] = useState<boolean>(false);

  const handleSetActiveCategories = useCallback(
    (title: string) => {
      dispatch({ type: SET_GAME, payload: { data: title, keys: "category" } });
      setSearchActive(false); // Set search button to inactive
      const buttonsList = [...buttons];

      const newButtonsList = buttonsList.reduce(
        (acc: IButtons[], cv: IButtons) => {
          cv.title === title ? (cv.active = true) : (cv.active = false);

          acc.push(cv as IButtons);
          return acc;
        },
        []
      );

      setButtons(newButtonsList);
    },
    [dispatch, buttons]
  );

  const handleSearchActive = useCallback(() => {
    setSearchActive(!searchActive);
  }, [searchActive]);

  const handleSearch = debounce((e: any) => {
    dispatch({ type: SET_SEARCHED_VALUE, payload: e?.target?.value });
  }, 500);

  const handleOpenGameProvider = useCallback(() => {
    dispatch({
      type: SET_GAME_PROVIDER,
      payload: { data: true, keys: "show" },
    });
  }, [dispatch]);

  return {
    buttons,
    handleSetActiveCategories,
    searchActive,
    handleSearchActive,
    handleSearch,
    handleOpenGameProvider,
  };
};

export default ViewModel;
