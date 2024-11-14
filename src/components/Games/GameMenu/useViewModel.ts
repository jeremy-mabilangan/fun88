import { IGames } from "../../../common/types/games";
import List from "./List";

const ViewModel = () => {
  const gameList = List;
  return { gameList };
};

export default ViewModel;
