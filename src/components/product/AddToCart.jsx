import React from "react"
import { connect, useDispatch } from "react-redux"
import { addItem, addToCart } from "../../state/actions/shopping_cart"
import { Button } from "@chakra-ui/button"
import { FaCartPlus } from "react-icons/fa"
import { useColorMode } from "@chakra-ui/color-mode"
import { myColors } from "../../utilities/my-colors"

const AddToCart = ({ sku }) => {
  const dispatch = useDispatch()
  const addProductToCart = ev => {
    dispatch(addItem(sku))
  }
  const { colorMode } = useColorMode()

  return (
    <Button
      onClick={addProductToCart}
      rightIcon={<FaCartPlus />}
      color={colorMode === "light" ? myColors.buttonLight : myColors.buttonDark}
      variant="outline"
      colorScheme="orange"
      size="lg"
      // {
      //   colorMode === "light" ? myColors.buttonLight : myColors.buttonDark
      // }
    >
      Agregar al carrito
    </Button>

    // <Box
    //   as="button"
    //   borderRadius="md"
    //   bg={colorMode === "light" ? myColors.buttonLight : myColors.buttonDark}
    //   color={
    //     colorMode === "light" ? myColors.textBtnLight : myColors.textBtnDark
    //   }
    //   px={6}
    //   h={8}
    // >
    //   Agregar al carrito
    //   <Icon as={FaCartPlus} w={6} h={6} />
    // </Box>
  )
}
export default connect(null, { addToCart })(AddToCart)
