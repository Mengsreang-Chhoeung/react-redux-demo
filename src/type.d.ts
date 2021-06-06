interface IRestaurant{
    id: number
    name: string
    location: string
}

type RestaurantState = {
    restaurants: IRestaurant[]
}

type RestaurantAction = {
    type: string
    restaurant: IRestaurant
}

type DispatchRestaurantType = (args: RestaurantAction) => RestaurantAction