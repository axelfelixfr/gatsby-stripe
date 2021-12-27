import React from "react"
import { Link } from "gatsby"
import { IconButton } from "@chakra-ui/button"
import { TiShoppingCart } from "react-icons/ti"

export const ButtonCart = () => {
  return (
    <Link to="/carrito-compras">
      <IconButton
        size="md"
        fontSize="30px"
        aria-label="Button Cart"
        icon={<TiShoppingCart />}
        variant="ghost"
        color="current"
      />
    </Link>
  )
}
