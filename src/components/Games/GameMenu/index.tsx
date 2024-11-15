import { IGames } from "../../../common/interface/games";
import { ReactComponent as Mask } from "../../../common/assets/icons/mask.svg";
import { ReactComponent as Favorite } from "../../../common/assets/icons/favorite.svg";
import { ReactComponent as NonFavorite } from "../../../common/assets/icons/non_favorite.svg";
import ViewModel from "./useViewModel";
import GameSkeleton from "./GameSkeleton";
import GameProviderRow from "./GameProviderRow";

const GameMenu = () => {
  const { gameList, handleFavorite, loading, gameProviders } = ViewModel();

  return (
    <div className="px-4 pb-[70px]">
      {gameList?.length === 0 && !loading && (
        <p className="w-full text-center text-secondary-color mt-2">
          No game found
        </p>
      )}
      <div className="grid grid-cols-3 gap-3">
        {loading && (
          <>
            <GameSkeleton />
            <GameSkeleton />
            <GameSkeleton />
          </>
        )}
        {gameList?.map((game: IGames, index) => (
          <div className="relative rounded-lg overflow-hidden" key={index}>
            <button
              onClick={() => handleFavorite(game.id)}
              className="h-[35px] w-[35px] absolute right-0"
            >
              <div className="relative w-full h-full">
                {game.isFavorite ? (
                  <>
                    <Mask className="absolute right-0" />
                    <span className="absolute top-1 right-1">
                      <Favorite width="17" height="15" fill="#FFD703" />
                    </span>
                  </>
                ) : (
                  <>
                    <Mask className="absolute right-0" />
                    <span className="absolute top-1 right-1">
                      <NonFavorite width="17" height="15" />
                    </span>
                  </>
                )}
              </div>
            </button>
            <img className="h-full w-full" alt={game.name} src={game.img} />
          </div>
        ))}
      </div>

      {gameProviders?.selected.length ? <GameProviderRow /> : <></>}
    </div>
  );
};

export default GameMenu;
