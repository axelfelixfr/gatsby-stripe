import React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"
import { CarouselPromos } from "./../components/home/CarouselPromos"
import { LightBoxProducts } from "../components/home/LightBoxProducts"
import { ContainerProducts } from "../components/home/ContainerProducts"

const Index = props => {
  const products = props.data.allStripeProduct.nodes

  return (
    <Layout>
      <CarouselPromos />
      <LightBoxProducts />
      <ContainerProducts products={products} />
    </Layout>
  )
}
/* Hacemos la consulta a graphql */
export const pageQuery = graphql`
  {
    allStripeProduct {
      nodes {
        id
        name
        slug
        images
        description
        metadata {
          Categoria
        }
        unit_label
      }
    }
  }
`

export default Index
