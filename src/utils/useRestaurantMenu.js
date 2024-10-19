import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const getResInfo = async () => {
    const data = await fetch(`${MENU_API}${resId}`);
    const json = await data.json();
    setResInfo(json?.data);
  };

  useEffect(() => {
    getResInfo();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
