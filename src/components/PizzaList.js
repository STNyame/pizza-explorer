// src/components/PizzaList.js
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  selectPizzas,
  selectNumberOfPizzas,
  selectMostBoughtPizza,
} from "../store/pizzas/selectors";
import { toggleFavorite } from "../store/user/actions";

export default function PizzaList() {
  const [sorted, setSorted] = useState(false);
  const [favored, setFavored] = useState(false);
  const user = useSelector(selectUser);
  const amountOfPizzas = useSelector(selectNumberOfPizzas);
  const pizzas = useSelector(selectPizzas);
  const sortedPizzas = [...pizzas].sort((a, b) => b.bought - a.bought);
  const pizzaList = sorted ? sortedPizzas : pizzas;
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <p>Number of pizzas: {amountOfPizzas}</p>
      <select
        onChange={(e) => {
          e.target.value === "true" ? setSorted(true) : setSorted(false);
        }}
      >
        <option value={false}>All pizzas</option>
        <option value={true}>By popularity</option>
      </select>
      {pizzaList.map((pizza) => {
        return (
          <li key={pizza.id}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>Bought: {pizza.bought} times.</p>
            <button
              onClick={() => {
                dispatch(toggleFavorite(pizza.id));

                console.log(pizza.id);
              }}
            >
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>
          </li>
        );
      })}

      <p>TODO: the list of pizzas</p>
    </div>
  );
}
