import { ReactComponent as Sports } from "../../common/assets/icons/sports.svg";
import { ReactComponent as Star } from "../../common/assets/icons/star.svg";
import { ReactComponent as Invite } from "../../common/assets/icons/invite.svg";
import { ReactComponent as Live } from "../../common/assets/icons/live.svg";
import { ReactComponent as Cashier } from "../../common/assets/icons/cashier.svg";
import { useState } from "react";
import { IButtons } from "../../common/interface/buttons";

const ViewModel = () => {
  const [buttons, setButtons] = useState<IButtons[]>([
    {
      title: "SPORTS",
      Icon: Sports,
      active: true,
    },
    {
      title: "FAVORITES",
      Icon: Star,
      active: false,
    },
    {
      title: "INVITE",
      Icon: Invite,
      active: false,
    },
    {
      title: "CASINO LIVE",
      Icon: Live,
      active: false,
    },
    {
      title: "CASHIER",
      Icon: Cashier,
      active: false,
    },
  ]);

  const handleSetActiveButton = (title: string) => {
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

  return {
    buttons,
    handleSetActiveButton,
  };
};

export default ViewModel;
