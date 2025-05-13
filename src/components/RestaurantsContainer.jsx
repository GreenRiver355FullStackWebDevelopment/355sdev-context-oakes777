//import custom context hook to access shared state
import { useRestaurants } from "../context/RestaurantContext";
import Restaurant from "./Restaurant";

function RestaurantsContainer() {
  const { restaurants } = useRestaurants();//context instead of props
  
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
