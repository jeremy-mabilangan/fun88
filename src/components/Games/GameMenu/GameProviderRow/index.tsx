import { IGameProviders } from "../../../../common/interface/games";
import ViewModel from "./useViewModel";
import { ReactComponent as RightArrow } from "../../../../common/assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../../../common/assets/icons/left-arrow.svg";

const GameProviderRow = () => {
  const { gameProviders } = ViewModel();

  return (
    <div className="flex flex-col bg-white mt-10">
      <div className="flex justify-between mb-5">
        <p className="text-[18px] text-secondary-color ">
          Proveedores de juego
        </p>
        <div className="flex gap-3">
          <button>
            <LeftArrow height={20} width={20} fill="#808080" />
          </button>
          <button>
            <RightArrow height={20} width={20} fill="#808080" />
          </button>
        </div>
      </div>
      <div
        className="flex overflow-x-scroll scroll-smooth no-scrollbar"
        id="game-provider-row"
      >
        <div className="flex flex-nowrap gap-3">
          {gameProviders?.map((provider: IGameProviders, index) => (
            <div className="inline-block w-[30vw]" key={index}>
              <div>
                <div className="flex justify-center items-center h-full bg-[#e7e7e7] rounded-t-md">
                  <img
                    alt={provider.name}
                    className="h-16 object-contain"
                    src={provider.img}
                  />
                </div>
                <div className="text-center bg-[#f3f3f3] py-1 rounded-b-md">
                  <p className="text-sm text-secondary-color">
                    {provider.name}
                  </p>
                  <p className="text-sm text-secondary-color">2 juego</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameProviderRow;
