import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [resList, setResList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      setResList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    getData();
  }, []);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="container">
      <div className="filter">
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            placeholder="Enter Something"
            value={searchVal}
            onChange={(event) => {
              setSearchVal(event.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              setFilterList(
                resList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchVal.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            setFilterList(resList.filter((res) => res.info.avgRating >= 4));
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div id="restro-container">
        {filterList.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard restroData={restaurant}></RestaurantCard>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
