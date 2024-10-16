import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      setResList(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    }
    getData();
  }, []);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setResList(resList.filter((res) => res.info.avgRating >= 4.5));
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div id="restro-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restroData={restaurant}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
}

export default Body;
