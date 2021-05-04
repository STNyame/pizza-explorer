// src/store/user/reducer.js
const initialState = {
  name: "Helva",
  id: 42,
  favorites: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/toggleFavorite":
      if (state.favorites.includes(action.payload)) {
        return {
          ...state,
          favorites: [...state.favorites.filter((e) => e !== action.payload)],
        };
      } else {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }

    default: {
      return state;
    }
  }
}
