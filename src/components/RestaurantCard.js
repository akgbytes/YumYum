import { CDN_URL } from "../utils/constants";

function RestaurantCard({ restroData }) {
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    cloudinaryImageId,
    sla,
    areaName,
  } = restroData.info;
  return (
    <div className="restro-card">
      <div id="restro-img-container">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="restro-image"
          className="restro-img"
        />
      </div>
      <div>{name}</div>
      <div>{avgRating} star</div>
      <div>{sla.slaString}</div>
      <div>{cuisines.join(", ")}</div>
      <div>{areaName}</div>
      {/* <div>{costForTwo}</div> */}
    </div>
  );
}

export default RestaurantCard;
