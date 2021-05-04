// src/store/something/actions.js
export const toggleFavorite = (pizzaId) => ({
  type: "user/toggleFavorite",
  payload: pizzaId,
});
