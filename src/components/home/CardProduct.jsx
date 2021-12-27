import React from "react"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Center, Box, Stack, Text, Badge, Flex } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Tooltip } from "@chakra-ui/tooltip"
import { TiShoppingCart } from "react-icons/ti"
import Icon from "@chakra-ui/icon"
import { Link } from "gatsby"
import styled from "styled-components"

export const CardProduct = ({ name, images, description, metadata, slug }) => {
  // const IMAGE =
  //   "https://cdn.pixabay.com/photo/2018/01/29/22/56/bananas-3117509_960_720.jpg"

  // const dataProduct = {
  //   isNew: true,
  //   imageURL:
  //     "https://cdn.pixabay.com/photo/2015/11/05/23/08/banana-1025109_960_720.jpg",
  //   name: "Bananas",
  //   price: 4.5,
  //   rating: 4.2,
  //   numReviews: 34,
  // }

  const BoxHoverTransform = styled(Box)`
    --sck-translate-x: 0;
    --sck-translate-y: 0;
    --sck-rotate: 0;
    --sck-skew-x: 0;
    --sck-skew-y: 0;
    --sck-scale-x: 1;
    --sck-scale-y: 1;
    --sck-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition-duration: 500ms;

    &:hover {
      transform: translateX(var(--sck-translate-x))
        translateY(var(--sck-translate-y)) rotate(var(--sck-rotate))
        skewX(var(--sck-skew-x)) skewY(var(--sck-skew-y))
        scaleX(var(--sck-scale-x)) scaleY(var(--sck-scale-y));
      transition-property: all;
      box-shadow: var(--sck-ring-offset-shadow, 0 0 #0000),
        var(--sck-ring-shadow, 0 0 #0000), var(--sck-shadow);
      border: 0;
    }
  `

  return (
    <Center py={8} m={2}>
      <BoxHoverTransform
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${images[0]})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={images[0]}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {metadata.categoria}
          </Text>
          {/* <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              Nice Chair, pink
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                $57
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text>
            </Stack> */}
        </Stack>
        <Box>
          <Box d="flex" alignItems="baseline">
            {/* {dataProduct.isNew && ( */}
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              Oferta
            </Badge>
            {/* )} */}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
            <Tooltip
              label="Ver producto"
              bg={useColorModeValue("#FFC107", "white")}
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
              hasArrow
            >
              <Link to={`/productos/${slug}`}>
                <Icon as={TiShoppingCart} h={10} w={10} alignSelf={"center"} />
              </Link>
              {/* <chakra.a href={"#"} display={"flex"}> */}
              {/* </chakra.a> */}
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {/* {dataProduct.price.toFixed(2)} */}
              50.00
            </Box>
          </Flex>
        </Box>
      </BoxHoverTransform>
    </Center>
  )
}
