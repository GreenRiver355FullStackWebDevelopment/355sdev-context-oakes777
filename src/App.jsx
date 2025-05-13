import Main from "./components/Main";
import { useEffect, useState } from "react";
import "./App.css";
//import the custom context object
import { RestaurantContext } from "./context/RestaurantContext";

function App() {

  const [restaurantState, setRestaurants] = useState([]);
  //fxn that updates the global restaurant list
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
    //wrap the app in the context provider
    //this makes 'restaurants' and 'updateRestaurants' available to any nested components that calls the useRestaurant() hook from RestaurantContext
    <RestaurantContext.Provider
      value={{ restaurants: restaurantState, updateRestaurants }} //shared via context
    >
      <div className="App">
        {/* all child components inside here can now use useRestaurants() to access shared state */}
        <Main />
      </div>
    </RestaurantContext.Provider>
  );
}
export default App;
