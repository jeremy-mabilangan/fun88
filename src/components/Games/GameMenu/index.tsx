import { IGames } from "../../../common/types/games";
import ViewModel from "./useViewModel";

const GameMenu = () => {
  const { gameList } = ViewModel();
  return (
    <div className="px-4 pb-[70px]">
      <div className="grid grid-cols-3 gap-3">
        {gameList.map((game: IGames, index) => (
          <div key={index}>
            <img alt={game.name} src={game.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameMenu;
