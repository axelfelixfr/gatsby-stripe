import React from "react"
import { CardProduct } from "./CardProduct"
import styled from "styled-components"

export const ContainerProducts = ({ products }) => {
  const ContainerProd = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  `

  const GridProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  `

  return (
    <ContainerProd>
      <GridProducts>
        {
          //props.data.allStripeProduct.nodes = products
          products.map(product => (
            <CardProduct {...product} key={product.id} />
          ))
        }
      </GridProducts>
    </ContainerProd>
  )
}
