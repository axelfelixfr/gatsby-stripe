import React from "react"
import AddToCart from "./AddToCart"
import { Box, Center, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import styled from "styled-components"
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react"

export default ({ products, skus, allProducts }) => {
  const AlignContent = styled.div`
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
  `

  const BoxImage = styled(Box)`
    margin: 0 auto;
  `
  const sku = skus[0]

  return (
    <Center>
      {/* {sku && sku.product.images && (
              <img src={skus[0].product.images} alt="Imagen del Producto"></img>
            )} */}
      <AlignContent>
        <BoxImage
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          {sku && sku.product.images && (
            <Image src={skus[0].product.images} alt={skus[0].product.name} />
          )}
        </BoxImage>

        <Stat>
          <StatLabel>
            <Text fontSize="4xl">{sku.product.name}</Text>
          </StatLabel>
          <StatNumber>
            ${sku.unit_amount / 100} <span>{sku.currency}</span>
          </StatNumber>
          {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
          <AddToCart sku={sku}></AddToCart>
        </Stat>
      </AlignContent>
    </Center>
  )
}
