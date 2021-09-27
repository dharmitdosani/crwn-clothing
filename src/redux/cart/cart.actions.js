import { CART_ACTIONS } from "./cart.constants";

export const toggleCartHidden = () => ({
  type: CART_ACTIONS.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CART_ACTIONS.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CART_ACTIONS.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: CART_ACTIONS.REMOVE_ITEM,
  payload: item,
});
