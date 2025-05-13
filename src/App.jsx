import Main from "./components/Main";
import { useEffect, useState } from "react";
import "./App.css";
import { RestaurantContext } from "./context/RestaurantContext";

function App() {
  const [restaurantState, setRestaurants] = useState([]);

  const updateRestaurants = (newRestaurant) => {
    setRestaurants((prev) => [...prev, newRestaurant]);
  };

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await fetch("http://localhost:3000/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      }
    }

    fetchRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{ restaurants: restaurantState, updateRestaurants }} //shared via context
    >
      <div className="App">
        <Main />
      </div>
    </RestaurantContext.Provider>
  );
}
export default App;
