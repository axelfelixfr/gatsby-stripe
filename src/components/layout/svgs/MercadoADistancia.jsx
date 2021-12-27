import React from "react"
import LogoDark from "../../../assets/LogoDark.svg"
import LogoLight from "../../../assets/LogoLight.svg"

const MercadoADistancia = ({ colorMode }) =>
  colorMode === "light" ? <LogoLight /> : <LogoDark />

export default MercadoADistancia
