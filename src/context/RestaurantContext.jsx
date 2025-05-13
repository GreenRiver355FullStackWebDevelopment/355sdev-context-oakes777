import { createContext, useContext } from "react";

//step 1: create context object
export const RestaurantContext = createContext();
//step 2: custom hook to use context easily
export const useRestaurants = () => useContext(RestaurantContext);