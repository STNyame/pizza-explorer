export const selectRestaurant = (reduxState) =>
  reduxState.restaurants.allRestaurants;

export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  return reduxState.restaurants.allRestaurants.filter((restaurant) => {
    return restaurant.pizzas.includes(pizzaId);
  });
};

export const selectThatRestaurantPizza = (restaurantId) => (reduxState) => {
  const test = reduxState.restaurants.allRestaurants.map(
    (currentRestaurant) => {
      return {
        ...currentRestaurant,
        pizzas: currentRestaurant.pizzas.map((id) =>
          reduxState.pizzas.allPizzas.find((pizza) => pizza.id === id)
        ),
      };
    }
  );
  return test.filter((restaurant) => {
    return restaurant.id === restaurantId;
  });
};

export const selectRestaurantsWithPizzas = (reduxState) => {
  return reduxState.restaurants.allRestaurants.map((currentRestaurant) => {
    return {
      ...currentRestaurant,
      pizzas: currentRestaurant.pizzas.map((id) =>
        reduxState.pizzas.allPizzas.find((pizza) => pizza.id === id)
      ),
    };
  });
};
