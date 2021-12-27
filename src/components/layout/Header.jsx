import React from "react"
import { ButtonCart } from "./ButtonCart"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import styled from "styled-components"
import MercadoADistancia from "./svgs/MercadoADistancia"
import { myColors } from "../../utilities/my-colors"
import { Link } from "gatsby"
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link as LinkChakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"
import { FaChevronDown, FaHamburger, FaChevronUp } from "react-icons/fa"
import { MdOutlineClose } from "react-icons/md"

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode } = useColorMode()

  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.900", "gray.200")
    const linkHoverColor = useColorModeValue("gray.800", "white")
    const popoverContentBgColor = useColorModeValue("white", "gray.800")
    const StackAlignSelf = styled(Stack)`
      align-self: center;
    `
    return (
      <StackAlignSelf direction={"row"} spacing={4}>
        {NAV_ITEMS.map(navItem => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <LinkChakra
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </LinkChakra>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map(child => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </StackAlignSelf>
    )
  }

  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <LinkChakra
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("yellow.200", "gray.700") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{
                color: useColorModeValue("gray.700", myColors.primaryLight),
              }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon
              color={useColorModeValue("gray.700", myColors.primaryLight)}
              w={5}
              h={5}
              as={FaChevronUp}
            />
          </Flex>
        </Stack>
      </LinkChakra>
    )
  }

  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
      >
        {NAV_ITEMS.map(navItem => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    )
  }

  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={FaChevronDown}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>

        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: "0!important" }}
        >
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map(child => (
                <LinkChakra key={child.label} py={2} href={child.href}>
                  {child.label}
                </LinkChakra>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    )
  }

  const NAV_ITEMS = [
    {
      label: "Inicio",
      href: "#",
    },
    {
      label: "Categorías",
      children: [
        {
          label: "Frutas",
          subLabel: "Frutas de primera calidad",
          href: "#",
        },
        {
          label: "Verduras",
          subLabel: "No olvide consumer cosas sanas",
          href: "#",
        },
        {
          label: "Pollo",
          subLabel: "El pollo más fresco que encontrara",
          href: "#",
        },
        {
          label: "Carne",
          subLabel: "Variedad en tipo de carne",
          href: "#",
        },
        {
          label: "Pescado",
          subLabel: "Comida del mar siempre hace bien",
          href: "#",
        },
      ],
    },
    {
      label: "Sobre nosotros",
      href: "#",
    },
    {
      label: "Contáctanos",
      href: "#",
    },
    {
      label: "Ayuda",
      href: "#",
    },
    // {
    //   label: "Testimonios",
    //   href: "#",
    // },
  ]

  return (
    <Box>
      <Flex
        bg={useColorModeValue(myColors.primaryLight, myColors.primaryDark)}
        color={useColorModeValue(myColors.textLight, myColors.textDark)}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              <Icon
                as={isOpen ? MdOutlineClose : FaHamburger}
                w={5}
                h={5}
                color={colorMode === "light" ? "gray.900" : "white"}
              />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link to="/">
              <MercadoADistancia colorMode={colorMode} />
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={["column", "column", "row"]}
          spacing={6}
        >
          <ColorModeSwitcher />
          <ButtonCart />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}
