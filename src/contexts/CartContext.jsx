import React, { createContext, useContext, useReducer } from "react";
import { notify } from "../componets/Toastify";
import { ACTIONS } from "../utils/consts";

const cartContext = createContext();
export function useCartContext() {
  return useContext(cartContext);
}

const initState = {
  cart: {
    movies: [],
    totalPrice: 0,
  },
  cartLength: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.cart:
      return { ...state, cart: action.payload };
    case ACTIONS.cartLength:
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("cart"));
  if (!data) {
    data = {
      movies: [],
      totalPrice: 0,
    };
    console.log(data);
  }
  return data;
}

function CartContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  function getCart() {
    const data = getDataFromLS();
    const quantity = data.movies.reduce((acc, item) => acc + item.count, 0);

    dispatch({
      type: ACTIONS.cartLength,
      payload: quantity,
    });
    dispatch({
      type: ACTIONS.cart,
      payload: data,
    });
  }

  function addMoviesToCart(movies) {
    const data = getDataFromLS();
    data.movies.push({ ...movies, count: 1, subPrice: +movies.price });

    data.totalPrice = data.movies.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
    notify("Successfully added to cart");
  }
  function deleteMoviesFromCart(id) {
    const data = getDataFromLS();
    data.movies = data.movies.filter((item) => item.id !== id);

    data.totalPrice = data.movies.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
    notify("Successfully removed to cart");
  }

  function isAlreadyInCart(id) {
    const data = getDataFromLS();
    const isInCart = data.movies.some((item) => item.id === id);
    return isInCart;
  }

  function plusCount(id) {
    const data = getDataFromLS();
    data.movies = data.movies.map((item) => {
      if (item.id === id) {
        item.count += 1;
        item.subPrice += +item.price;
      }
      return item;
    });
    data.totalPrice = data.movies.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function minusCount(id) {
    const data = getDataFromLS();
    data.movies = data.movies.map((item) => {
      if (item.id === id) {
        item.count -= 1;
        item.subPrice -= +item.price;
      }
      return item;
    });
    data.totalPrice = data.movies.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function clearCart() {
    localStorage.removeItem("cart");
    getCart();
  }
  const value = {
    cart: state.cart,
    cartLength: state.cartLength,
    getCart,
    addMoviesToCart,
    deleteMoviesFromCart,
    isAlreadyInCart,
    plusCount,
    minusCount,
    clearCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export default CartContext;
