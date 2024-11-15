import { ReactComponent as Close } from "../../../common/assets/icons/close.svg";
import { ReactComponent as SearchMenu } from "../../../common/assets/icons/search_menu.svg";
import GameProviderSkeleton from "./GameProviderSkeleton";
import ViewModel from "./useViewModel";

const GameProvider = () => {
  const { gameProviders, handleClose, handleSelectProvider } = ViewModel();
  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0 overflow-hidden">
      <div className="bg-white h-[70%] w-full absolute bottom-0">
        <div className="px-3 py-2 flex items-center justify-between bg-primary sticky top-0 text-white bg-primary-color">
          <div className="flex items-center gap-2">
            <SearchMenu />
            <p>Game Provider</p>
            {!gameProviders?.loading && (
              <p className="text-sm px-3 ring-1 ring-white rounded-full">
                {gameProviders?.list?.length || ""}
              </p>
            )}
          </div>
          <button onClick={handleClose}>
            <Close />
          </button>
        </div>
        {gameProviders?.list?.length === 0 && !gameProviders?.loading && (
          <p className="w-full text-center text-secondary-color mt-2">
            No game found
          </p>
        )}
        <div className="grid grid-cols-2 h-full gap-3 pb-[60px] p-3 overflow-y-scroll no-scrollbar">
          {gameProviders?.loading && (
            <>
              <GameProviderSkeleton />
              <GameProviderSkeleton />
            </>
          )}

          {!gameProviders?.loading &&
            gameProviders?.list?.map((provider, index) => (
              <button
                onClick={() => handleSelectProvider(provider.id)}
                className={`flex justify-center items-center h-full w-full bg-[#f2f2fb] rounded-md ${
                  provider?.isSelected ? "ring-1 ring-primary-color" : ""
                }`}
                key={index}
              >
                <img
                  alt={provider.name}
                  className="w-[60%] object-contain"
                  src={provider.img}
                />
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GameProvider;
