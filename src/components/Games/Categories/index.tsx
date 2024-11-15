import { ReactComponent as Search } from "../../../common/assets/icons/search.svg";
import { ReactComponent as SearchMenu } from "../../../common/assets/icons/search_menu.svg";
import ViewModel from "./useViewModel";

const Categories = () => {
  const {
    buttons,
    handleSetActiveCategories,
    searchActive,
    handleSearchActive,
    handleSearch,
    handleOpenGameProvider,
  } = ViewModel();

  return (
    <div className="sticky top-[56px] bg-white z-20">
      <div className="flex items-center h-auto w-full px-4">
        <button onClick={handleSearchActive}>
          <div className="pr-2 py-1 relative">
            <div className="flex justify-center">
              <Search
                height="24"
                width="24"
                color={searchActive ? "#21b1ff" : "#808080"}
              />
            </div>
            <span
              className={`block text-base ${
                searchActive
                  ? "text-primary-color underline underline-offset-2 decoration-2"
                  : "text-secondary-color"
              }`}
            >
              SEARCH
            </span>
          </div>
        </button>
        <div className="h-10 w-[1px] bg-[#999999]" />
        <div className="flex justify-between h-[60px] pl-1 gap-3 overflow-x-auto overflow-y-hidden no-scrollbar">
          {buttons.map(({ title, active, Icon }, index) => (
            <button
              className="w-auto"
              key={index}
              onClick={() => handleSetActiveCategories(title)}
            >
              <div className="px-2 pt-1 pb-1 relative">
                <div className="flex justify-center">
                  <Icon
                    height="24"
                    width="24"
                    color={active && !searchActive ? "#21b1ff" : "#808080"}
                  />
                </div>
                <p
                  className={`text-base text-nowrap uppercase ${
                    active && !searchActive
                      ? "text-primary-color underline underline-offset-2 decoration-2"
                      : "text-secondary-color"
                  }`}
                >
                  {title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {searchActive && (
        <div className="flex items-center justify-center py-2 px-4">
          <div className="flex w-full ring-1 ring-primary-color rounded-md mr-2">
            <div className="p-2">
              <Search height="24" width="24" color="#808080" />
            </div>
            <input
              type="search"
              className="w-full flex pr-2 rounded-md text-secondary-color outline-0 focus:outline-none"
              placeholder="Search games"
              onChange={handleSearch}
            />
          </div>
          <button
            type="submit"
            className="relative p-2 rounded-md ring-1 ring-secondary-color"
            onClick={handleOpenGameProvider}
          >
            <SearchMenu color="#808080" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
