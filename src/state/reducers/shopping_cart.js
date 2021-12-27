import { ADD_ITEM, CLEAR_SHOPPING_CART } from "../actionTypes";

// Funciones puras
export default function(state = [], action){
    //const { shopping_cart } = state;
    const shopping_cart = state;
    if(action.type === ADD_ITEM){
        // Buscamos si el SKU a agregar ya está en el carrito
        const skuIfAny = shopping_cart.find(sku => sku.id === action.payload.id);
        if (skuIfAny){
            // Si el SKU ya fue agregado, se genera nuevo arrelgo con map
            /*
            return {
                shopping_cart: shopping_cart.map(sku => {
                    if(sku.id === skuIfAny.id) return { ...sku, quantity: sku.quantity + 1 };
                        return sku; }
                )};
            */
            return shopping_cart.map(sku => {
                    if(sku.id === skuIfAny.id) return { ...sku, quantity: sku.quantity + 1 };
                        return sku; 
                    });
            }
        // Agregarle el SKU e inicializarlo en 1
        /*
        return { shopping_cart: shopping_cart.concat([
            {
                ...action.payload,
                quantity: 1
            }
        ]) };
        */
        return shopping_cart.concat([
            {
                ...action.payload,
                quantity: 1
            }
        ]);
    }

    if(action.type === CLEAR_SHOPPING_CART){
        /*
        return {
            shopping_cart: []
        }
        */
        return []
    }

    return shopping_cart;
}