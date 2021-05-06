import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectRestaurantsWithPizzas,
  selectRestaurantsThatSellPizza,
  selectThatRestaurantPizza,
} from "../store/restaurants/selectors";
import { selectPizzas } from "../store/pizzas/selectors";

export default function RestaurantList() {
  const [selectedPizza, setSelectedPizza] = useState();
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  let toggleSort = false;
  const pizzalist = useSelector(selectRestaurantsWithPizzas);
  const pizzas = useSelector(selectPizzas);
  const restaurantsSorted = [...pizzalist].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const restaurantByPizza = useSelector(
    selectRestaurantsThatSellPizza(selectedPizza)
  );

  const pizzaByRestaurant = useSelector(
    selectThatRestaurantPizza(selectedRestaurant)
  );

  console.log(pizzaByRestaurant);
  return (
    <div>
      <select onChange={(e) => setSelectedRestaurant(parseInt(e.target.value))}>
        {pizzalist.map((current) => {
          return (
            <option key={current.id} value={current.id}>
              {current.name}
            </option>
          );
        })}
      </select>

      {pizzaByRestaurant.map((current) => {
        return (
          <ul>
            {current.pizzas.map((pizza) => (
              <li>{pizza.name}</li>
            ))}
          </ul>
        );
      })}
      {/* 
      <ul>
        {pizzalist.map((current) => {
          return (
            <li>
              {current.name}
              <ul>
                {current.pizzas.map((pizza) => (
                  <li key={pizza.id}>{pizza.name}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul> */}
      <select onChange={(e) => setSelectedPizza(parseInt(e.target.value))}>
        {pizzas.map((pizza) => (
          <option key={pizza.id} value={pizza.id}>
            {pizza.name}
          </option>
        ))}
      </select>
      <ul>
        {restaurantByPizza.map((current) => {
          return <li>{current.name}</li>;
        })}
      </ul>
    </div>
  );
}
