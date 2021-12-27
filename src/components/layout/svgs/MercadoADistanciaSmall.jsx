import React from "react"
import LogoDarkSmall from "../../../assets/LogoDarkSmall.svg"
import LogoLightSmall from "../../../assets/LogoLightSmall.svg"

const MercadoADistanciaSmall = ({ colorMode }) =>
  colorMode === "light" ? <LogoLightSmall /> : <LogoDarkSmall />

export default MercadoADistanciaSmall
