// Action creator for shopping_cart
// Funciones que retornan acciones

import { ADD_ITEM, CLEAR_SHOPPING_CART } from "../actionTypes"

/*
    Formato de una acción en Redux:
    { type: '', payload: {} }
*/

export const addItem = (product) => {
    return {
        type: ADD_ITEM,
        payload: product
    }
}

export const clearShoppingCart = () => ({
    type: CLEAR_SHOPPING_CART
})