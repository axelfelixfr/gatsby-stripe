import React from "react"
import Layout from "../components/layout/Layout"
import { useWindowSize } from "react-use"
import Confetti from "react-confetti"
// import Success from "../components/Success"

const PagoExitoso = props => {
  const { width, height } = useWindowSize()

  return (
    <Layout>
      {/* <Success></Success> */}
      <Confetti width={width} height={height} />
      <h1>Tu pago fue procesado</h1>
      <p>
        Recibiras en tu correo electrónico un comprobante de pago e
        instrucciones adicionales
      </p>
    </Layout>
  )
}

export default PagoExitoso
