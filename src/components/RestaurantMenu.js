import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const getResInfo = async () => {
    const data = await fetch(`${MENU_API}${resId}`);
    const json = await data.json();
    setResInfo(json?.data);
    console.log();
  };

  useEffect(() => {
    getResInfo();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const { name, city, areaName, avgRatingString, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const resMenu =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div className="res-info-container">
      <h1>{name}</h1>
      <h3>
        {avgRatingString} Stars ({totalRatingsString})
      </h3>
      <h3>
        {areaName}, {city}
      </h3>
      <br />
      <h2>Menu</h2>
      <ul>
        {resMenu.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
