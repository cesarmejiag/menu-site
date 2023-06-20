import { useContext } from "react";
import {
  SiteContext,
  siteLinks,
  socialLinks,
  homePromos,
} from "../context/SiteContex";

const SiteProvider = ({ children }) => {
  return (
    <SiteContext.Provider value={{ siteLinks, socialLinks, homePromos }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);
export default SiteProvider;
