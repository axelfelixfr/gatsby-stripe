import React, { useEffect, useState } from "react"

export const Checkout = ({ shoppingCart }) => {
  console.log(shoppingCart)
  console.log(process.env.URL_ECOMMERCE)

  const [stripe, setStripe] = useState({})
  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
  }, []) // componentDidMount

  const redirectToCheckout = async ev => {
    const response = await stripe.redirectToCheckout({
      //lineItems: [ { price: sku.id, quantity: 1 } ],
      lineItems: shoppingCart.map(price => ({
        price: price.id,
        quantity: price.quantity,
      })),
      mode: "payment",
      locale: "es-419",
      submitType: "pay",
      billingAddressCollection: "required",
      successUrl: `${process.env.URL_ECOMMERCE}/pago-exitoso`,
      cancelUrl: `${process.env.URL_ECOMMERCE}`,
    })

    if (response.error) {
      console.log(response.error)
    }
  }

  return (
    <button onClick={redirectToCheckout} className="app-btn w-100">
      Checkout
    </button>
  )
}
