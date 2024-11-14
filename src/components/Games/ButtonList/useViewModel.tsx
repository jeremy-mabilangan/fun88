import { ReactComponent as Fire } from "../../../common/assets/icons/fire.svg";
import { ReactComponent as New } from "../../../common/assets/icons/new.svg";
import { ReactComponent as Slots } from "../../../common/assets/icons/slots.svg";
import { ReactComponent as Live } from "../../../common/assets/icons/live.svg";
import { ReactComponent as Jackpots } from "../../../common/assets/icons/jackpots.svg";
import { ReactComponent as Card } from "../../../common/assets/icons/card.svg";
import { ReactComponent as Coin } from "../../../common/assets/icons/coin.svg";
import { ReactComponent as Square } from "../../../common/assets/icons/app_square.svg";
import { useState } from "react";
import { IButtons } from "../../../common/types/bottomNavbar";

const ViewModel = () => {
  const [buttons, setButtons] = useState<IButtons[]>([
    { title: "START", Icon: Fire, active: true },
    { title: "NEW", Icon: New, active: false },
    { title: "SLOTS", Icon: Slots, active: false },
    { title: "LIVE", Icon: Live, active: false },
    { title: "JACKPOTS", Icon: Jackpots, active: false },
    { title: "TABLE GAMES", Icon: Card, active: false },
    { title: "BINGO", Icon: Coin, active: false },
    { title: "OTHERS", Icon: Square, active: false },
  ]);

  const [searchActive, setSearchActive] = useState<boolean>(false);

  const handleSetActiveButton = (title: string) => {
    setSearchActive(false);
    const buttonsList = [...buttons];

    const newButtonsList = buttonsList.reduce(
      (acc: IButtons[], cv: IButtons) => {
        if (cv.title === title) {
          cv.active = true;
        } else {
          cv.active = false;
        }

        acc.push(cv as IButtons);

        return acc;
      },
      []
    );

    setButtons(newButtonsList);
  };

  const handleSearchActive = () => {
    setSearchActive(!searchActive);
  };

  return { buttons, handleSetActiveButton, searchActive, handleSearchActive };
};

export default ViewModel;
