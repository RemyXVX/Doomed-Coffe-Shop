const initialState = {
  user: null,
  cartItems: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
