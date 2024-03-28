export const productReducer = (state, action) => {
    switch (action.type) {
      case "SORT_BY_PRICE":
        return { ...state, sort: action.payload };
      case "FILTER_BY_CATEGORY":
        return { ...state, byCategory: action.payload };
      case "FILTER_BY_RATING":
        return { ...state, byRating: action.payload };
      case "CLEAR_FILTERS":
        return { byCategory: [], byRating: 0 };
      default:
        return state;
    }
  };

export default productReducer;