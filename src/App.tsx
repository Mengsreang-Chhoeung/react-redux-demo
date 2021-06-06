import React, { useCallback } from 'react';
import RestaurantPage from './components/Restaurant';
import {addRestaurant, removeRestaurant} from './redux/RestaurantActionCreator';
import {Dispatch} from 'redux';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

const App: React.FC = () => {

  const restaurants: readonly IRestaurant[] = useSelector(
    (state: RestaurantState) => state.restaurants,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveRestaurant = useCallback(
    (restaurant: IRestaurant) => {
      dispatch(addRestaurant(restaurant))
    },
    [dispatch]
  );

  return (
    <React.Fragment>
      {
        restaurants.map((restaurant: IRestaurant) => (
          <RestaurantPage
            key={restaurant.id} 
            saveRestaurant={saveRestaurant} 
            removeRestaurant={removeRestaurant} 
            restaurant={restaurant}
          />
        ))
      }
    </React.Fragment>
  );
}

export default App;
