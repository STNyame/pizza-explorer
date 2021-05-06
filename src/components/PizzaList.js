// src/components/PizzaList.js
import { useSelector } from "react-redux";
import "./PizzaList.css";
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

      <div className="body">
        <div className="container">
          {pizzaList.map((pizza) => {
            return (
              <div
                className="item"
                style={{
                  backgroundImage: `url(${pizza.image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                key={pizza.id}
              >
                <div className="pizza-info">
                  <h2>{pizza.name}</h2>
                  <p>{pizza.description}</p>
                  <p>Bought: {pizza.bought} times.</p>
                  <button
                    className="like-button"
                    onClick={() => {
                      dispatch(toggleFavorite(pizza.id));

                      console.log(pizza.id);
                    }}
                  >
                    {user.favorites.includes(pizza.id) ? "♥" : "♡"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p>TODO: the list of pizzas</p>
      </div>
    </div>
  );
}
