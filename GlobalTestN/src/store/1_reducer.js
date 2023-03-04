
export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_INGREDIENT":
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload],
        };
  
      case "DELETE_INGREDIENT":
        return {
          ...state,
          ingredients: state.ingredients.filter(
            (ingredient) => ingredient.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };