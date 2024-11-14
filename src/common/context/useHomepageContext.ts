import { useContext } from "react";
import { HomepageRootContext } from "../provider/HomepageProvider";

export const useHomepageContext = () => ({
  ...useContext(HomepageRootContext),
});
