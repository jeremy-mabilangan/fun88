import Categories from "./Categories";
import GameMenu from "./GameMenu";
import GameProvider from "./GameProvider";
import ViewModel from "./useViewModel";

const Games = () => {
  const { gameProviders } = ViewModel();
  return (
    <>
      <Categories />
      <GameMenu />
      {gameProviders?.show && <GameProvider />}
    </>
  );
};

export default Games;
