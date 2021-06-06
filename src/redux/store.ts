import { createStore } from "redux";
import RestaurantReducer from "./RestaurantReducer";

const restaurantStore = createStore(
    RestaurantReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default restaurantStore;