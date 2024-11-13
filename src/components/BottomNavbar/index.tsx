import ViewModel from "./useViewModel";
import active_border from "../../common/assets/icons/active_border.svg";

const BottomNavbar = () => {
  const { buttons, handleSetActiveButton } = ViewModel();

  return (
    <div className="flex justify-between h-[70px]">
      {buttons.map(({ title, active, Icon }, index) => (
        <button
          className="flex-1 group"
          key={index}
          onClick={() => handleSetActiveButton(title)}
        >
          <div className="px-1 pt-1 pb-1 relative">
            <div className="flex justify-center">
              {active && (
                <img
                  className="h-9 w-9 mt-[-6px] absolute"
                  alt="Active Border Icon"
                  src={active_border}
                />
              )}
              <Icon
                height="24"
                width="24"
                color={active ? "#21b1ff" : "#808080"}
              />
            </div>
            <span
              className={`block text-xs mt-1 ${
                active ? "text-primary-color" : "text-secondary-color"
              }`}
            >
              {title}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default BottomNavbar;
