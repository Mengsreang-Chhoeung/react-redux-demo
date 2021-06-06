import * as RestaurantActionType from './RestaurantActionType';

const initialState: RestaurantState = {
    restaurants: [
        {
            id: 1,
            name: 'Restaurant One',
            location: 'Phnom Penh'
        },
        {
            id: 2,
            name: 'Restaurant Two',
            location: 'Kandal'
        },
        {
            id: 3,
            name: 'Restaurant Three',
            location: 'Kompong Cham'
        },
    ]
}

const RestaurantReducer = (
    state: RestaurantState = initialState, 
    action: RestaurantAction
): RestaurantState => {
    switch(action.type) {
        case RestaurantActionType.ADD_RESTAURANT:
            const newRestaurant: IRestaurant = {
                id: Math.random(),
                name: action.restaurant.name,
                location: action.restaurant.location,
            }

            return {
                ...state,
                restaurants: state.restaurants.concat(newRestaurant)
            }

        case RestaurantActionType.REMOVE_RESTAURANT:
            const deleteRestaurant: IRestaurant[] = state.restaurants.filter(
                restaurant => restaurant.id !== action.restaurant.id
            )

            return {
                ...state,
                restaurants: deleteRestaurant
            }
    }
    return state;
}

export default RestaurantReducer;