import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
