import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PresentationProduct from "../components/product/PresentationProduct"

export default props => {
  const product = props.data.stripeProduct
  const skus = props.data.allStripePrice.nodes
  const allProducts = props.data.allStripeProduct.nodes
  return (
    <Layout>
      <PresentationProduct
        skus={skus}
        allProducts={allProducts}
        product={product}
      ></PresentationProduct>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String) {
    stripeProduct(id: { eq: $id }) {
      id
      name
      slug
      images
    }
    allStripeProduct(filter: { id: { eq: $id } }) {
      nodes {
        name
        slug
        id
        images
      }
    }
    allStripePrice(filter: { product: { id: { eq: $id } } }) {
      nodes {
        product {
          name
          images
          created
          id
        }
        unit_amount
        currency
        id
      }
    }
  }
`
