import { IGames } from "../../../common/types/games";
import { ReactComponent as Favorite } from "../../../common/assets/icons/favorite.svg";
import { ReactComponent as NonFavorite } from "../../../common/assets/icons/non_favorite.svg";
import ViewModel from "./useViewModel";

const GameMenu = () => {
  const { gameList } = ViewModel();

  return (
    <div className="px-4 pb-[70px]">
      <div className="grid grid-cols-3 gap-3">
        {gameList.map((game: IGames, index) => (
          <div className="relative rounded-lg overflow-hidden" key={index}>
            <button className="h-[35px] w-[35px] absolute right-0 border-solid border-t-[0px] border-r-[35px] border-b-[35px] border-l-[0px] border-t-[transparent] border-black border-b-[transparent] border-l-[transparent] opacity-50">
              <div className="w-full h-full ml-[15px] mt-[3px]">
                {game.isFavorite ? <Favorite /> : <NonFavorite />}
              </div>
            </button>
            <img className="h-full w-full" alt={game.name} src={game.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameMenu;
