import React from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import Layout from "../components/layout/Layout"
import { MdRemoveShoppingCart } from "react-icons/md"
import { clearShoppingCart } from "../state/actions/shopping_cart"
import { Checkout } from "../components/carrito/Checkout"

const CarritoCompras = props => {
  const shoppingCart = useSelector(state => state.shopping_cart, shallowEqual)

  const total = shoppingCart.reduce(
    (total, product) => product.unit_amount * product.quantity + total,
    0
  )

  const dispatch = useDispatch()

  const clear = () => {
    dispatch(clearShoppingCart())
  }

  return (
    <Layout>
      {/* <ShoppingCartCounter shoppingCart={shoppingCart}></ShoppingCartCounter> */}
      <div className="flex items-end">
        <div className="flex-1">
          <header className="flex p-6 items-center">
            <h2 className="text-3xl flex-1 font-semibold">
              Mi carrito de compras
            </h2>
            <div>
              <button onClick={clear} className="app-btn-flat">
                Vaciar el carrito
                <MdRemoveShoppingCart></MdRemoveShoppingCart>
              </button>
            </div>
          </header>
          <ul>
            {shoppingCart.map(sku => (
              <div key={sku.product.id}>
                <div className="flex-1">
                  <p className="font-bold uppercase">{sku.product.name}</p>$
                  {sku.unit_amount / 100}{" "}
                  <span className="text-sm">{sku.currency}</span>
                </div>
                <div>
                  <p className="px-4">{sku.quantity}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-1/3 text-right p-6 font-semibold">
          <p className="uppercase text-blue-200">Total</p>${total / 100}{" "}
          <span className="text-sm">MXN</span>
        </div>
      </div>
      <div className="p-6">
        <Checkout shoppingCart={shoppingCart}></Checkout>
      </div>
    </Layout>
  )
}

export default CarritoCompras
