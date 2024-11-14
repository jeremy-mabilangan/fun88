import { ReactComponent as Close } from "../../../common/assets/icons/close.svg";
import { ReactComponent as SearchMenu } from "../../../common/assets/icons/search_menu.svg";
import ViewModel from "./useViewModel";

const GameProvider = () => {
  const { gameProviders } = ViewModel();
  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0 overflow-hidden">
      <div className="bg-white h-[70%] w-full absolute bottom-0">
        <div className="px-3 py-2 flex items-center justify-between bg-primary sticky top-0 text-white bg-primary-color">
          <div className="flex items-center gap-2">
            <SearchMenu />
            <p>Game Provider</p>
            <p className="text-sm px-3 rounded-full ring-1 ring-white ">119</p>
          </div>
          <button>
            <Close />
          </button>
        </div>
        <div className="grid grid-cols-2 items-center justify-center h-full overflow-y-scroll gap-3 pb-[60px] p-3">
          {gameProviders.map((provider, index) => (
            <div
              className="flex justify-center h-full w-full bg-[#f2f2fb] rounded-md"
              key={index}
            >
              <img className="w-[60%] object-contain" src={provider.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameProvider;
