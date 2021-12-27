import { compose, createStore } from "redux"
// import shopping_cart from "./reducers/shopping_cart";
import reducer from "./reducers"

export default () =>
  createStore(
    reducer,
    //shopping_cart,
    { shopping_cart: [] },

    // En compose se agregan los plugins, en este caso se agrega Redux
    compose(
      typeof window !== "undefined" && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f
    )
  )
