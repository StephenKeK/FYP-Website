export const initialState = {
  basket: [],
  user: null,
  trade: [],
  traded_data: [],
};

//Selector : used in the production environment
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "TRADE":
      return {
        ...state,
        trade: [...state.trade, action.item],
      };

    case "EMPTY_TRADE":
      return {
        ...state,
        trade: [],
      };

    case "TRADED_DATA":
      return {
        ...state,
        traded_data: [...state.traded_data, action.item],
      };

    case "TRADED_DATA_RATING":
      let newRating = [...state.traded_data];
      for (let i = 0; i < state.traded_data.length; i++) {
        if (i === action.id) {
          newRating[i].rating = action.item;
        }
      }
      console.log("reducer", newRating);
      return {
        ...state,
        traded_data: newRating,
      };

      case "PAYMENT":
      return {
        ...state,
        trade: [...state.trade, action.item],
      };

    case "ADD_TO_CART":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_CART":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_CART":
      // Logic for removing item to basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //remove the item
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket.`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
