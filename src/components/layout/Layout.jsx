import React from "react"
import SEO from "./SEO"
import { Header } from "./Header"
import { Footer } from "./Footer"

export default props => {
  return (
    <>
      <SEO />
      <Header />
      <main> {props.children} </main>
      <Footer />
    </>
  )
}
