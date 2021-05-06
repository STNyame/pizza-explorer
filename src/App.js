import PizzaList from "./components/PizzaList";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import RestaurantList from "./components/RestaurantList";
function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
      <RestaurantList />
    </div>
  );
}

export default App;
