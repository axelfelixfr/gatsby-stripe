import React, { useState } from "react"
import { Container, Grid, GridItem, Text } from "@chakra-ui/layout"
import { LightBox } from "react-lightbox-pack"
import "react-lightbox-pack/dist/index.css"
import Bread from "../../../img/lightbox/bread.webp"
import Chicken from "../../../img/lightbox/chicken.webp"
import Market from "../../../img/lightbox/market.webp"
import Seafood from "../../../img/lightbox/seafood.webp"
import styled from "styled-components"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { useColorMode } from "@chakra-ui/color-mode"
import PriceLow from "./svgs/PriceLow"
import HandShake from "./svgs/HandShake"
import OnlinePayment from "./svgs/OnlinePayment"

export const LightBoxProducts = () => {
  // Lightbox
  const [toggle, setToggle] = useState(false)
  const [sIndex, setSIndex] = useState(0)

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state)
    setSIndex(sIndex)
  }

  const ContainerLightBox = styled(GridItem)`
    display: flex;
    flex-wrap: wrap;
    background-image: url("${props => props.bgImage}");
    background-position: ${props => props.bgPosition};
    background-size: cover;
    cursor: pointer;
  `
  const ContainerText = styled(Container)`
    align-self: center;
    text-align: center;
  `
  const { colorMode } = useColorMode()

  const jsonLightBox = [
    {
      id: 1,
      image: Chicken,
      title: "Pollo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
    {
      id: 2,
      image: Seafood,
      title: "Pescado",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
    {
      id: 3,
      image: Market,
      title: "Frutas y verduras",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
    {
      id: 4,
      image: Bread,
      title: "Pan fresco",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
  ]

  return (
    <>
      <Grid
        h="500px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
        m={5}
      >
        <ContainerLightBox
          colSpan={2}
          bgImage={Chicken}
          bgPosition="center center"
          onClick={() => {
            lightBoxHandler(true, 0)
          }}
        />
        <GridItem
          display="flex"
          colSpan={1}
          bg={useColorModeValue("#171923", "#FFFFFF")}
        >
          <ContainerText centerContent>
            <Text
              fontSize="2xl"
              display={{ sm: "none", md: "flex" }}
              noOfLines={[1, 2, 3]}
              isTruncated
              color={useColorModeValue("#FFFFFF", "#171923")}
            >
              ¡Ofertas todos los días!
            </Text>
            <PriceLow colorMode={colorMode} />
          </ContainerText>
        </GridItem>
        <ContainerLightBox
          colSpan={1}
          rowSpan={2}
          bgImage={Seafood}
          bgPosition="center center"
          onClick={() => {
            lightBoxHandler(true, 1)
          }}
          // Arreglar este display para el responsive
          display={{ sm: "none", md: "grid" }}
        />
        <GridItem colSpan={1} bg="#FFC107" display="flex">
          <ContainerText centerContent>
            <Text
              fontSize="2xl"
              display={{ sm: "none", md: "flex" }}
              noOfLines="2"
              color={useColorModeValue("#171923", "#FFFFFF")}
            >
              Apoya a pequeños comerciantes
            </Text>
            <HandShake colorMode={colorMode} />
          </ContainerText>
        </GridItem>
        <GridItem colSpan={1} bg="#FFC107" display="flex">
          <ContainerText centerContent>
            <Text
              fontSize="2xl"
              display={{ sm: "none", md: "flex" }}
              noOfLines="2"
              color={useColorModeValue("#171923", "#FFFFFF")}
            >
              Pagos seguros en línea
            </Text>
            <OnlinePayment colorMode={colorMode} />
          </ContainerText>
        </GridItem>
        <ContainerLightBox
          colSpan={2}
          bgImage={Market}
          bgPosition="center center"
          onClick={() => {
            lightBoxHandler(true, 2)
          }}
        />
        <ContainerLightBox
          colSpan={1}
          bgImage={Bread}
          bgPosition="center bottom"
          onClick={() => {
            lightBoxHandler(true, 3)
          }}
        />
      </Grid>
      <LightBox
        state={toggle}
        event={lightBoxHandler}
        data={jsonLightBox}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
      />
    </>
  )
}
