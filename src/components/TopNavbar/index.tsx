import logo from "../../common/assets/logos/logo.webp";
import menu from "../../common/assets/icons/menu.svg";
import wallet from "../../common/assets/icons/wallet.svg";
import user from "../../common/assets/icons/user.svg";
import divider from "../../common/assets/icons/divider.svg";

const TopNavbar = () => {
  return (
    <div className="flex justify-between h-14 w-full fixed top-0 shadow-lg px-1 bg-white">
      <div className="flex items-center">
        <button className="py-1 px-2">
          <img className="h-[18px] w-5" alt="Menu Icon" src={menu} />
        </button>
        <img className="h-5" alt="Logo" src={logo} />
      </div>
      <div className="flex items-center">
        <div className="flex gap-2 items-center">
          <img className="h-5 w-5" alt="Wallet Icon" src={wallet} />
          <p className="text-primary-color font-bold pt-[2px]">$1,990.6</p>
          <img className="h-10" alt="Divider Icon" src={divider} />
        </div>
        <button className="px-2">
          <img className="h-6 w-6" alt="User Icon" src={user} />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
