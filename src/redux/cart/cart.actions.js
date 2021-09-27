import { CART_ACTIONS } from "./cart.constants";

export const toggleCartHidden = () => ({
  type: CART_ACTIONS.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CART_ACTIONS.ADD_ITEM,
  payload: item,
});
