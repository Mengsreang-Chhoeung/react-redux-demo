import * as RestaurantActionType from './RestaurantActionType';

export const addRestaurant = (restaurant: IRestaurant) => {
    const action: RestaurantAction = {
        type: RestaurantActionType.ADD_RESTAURANT,
        restaurant,
    }

    return simulateHttpRequest(action);
}

export const removeRestaurant = (restaurant: IRestaurant) => {
    const action: RestaurantAction = {
        type: RestaurantActionType.REMOVE_RESTAURANT,
        restaurant,
    }

    return simulateHttpRequest(action);
}

export const simulateHttpRequest = (action: RestaurantAction) => {
    return (dispatch: DispatchRestaurantType) => {
        setTimeout(() => {
            dispatch(action);
        }, 500);
    }
}