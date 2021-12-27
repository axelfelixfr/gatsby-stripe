import React from "react"
import { Link } from "gatsby"
import { IoMdCart } from "react-icons/io"
import { IconContext } from "react-icons"
import { connect } from "react-redux"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Box } from "@chakra-ui/layout"
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"
import { myColors } from "./../../utilities/my-colors"
import MercadoADistanciaLogo from "./svgs/MercadoADistanciaLogo"

// Generamos los items de la nav, con su nombre y su href
const navItems = [
  {
    caption: "Home",
    href: "/",
  },
  {
    caption: "Products",
    href: "/productos",
  },
]

const Navbar = ({ shopping_cart }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      bg={useColorModeValue(myColors.primaryLight, myColors.primaryDark)}
      color={useColorModeValue(myColors.textLight, myColors.textDark)}
      px={3}
      py={6}
      boxShadow="md"
    >
      <header>
        <nav className="flex items-center">
          {/* <Logo /> */}
          <MercadoADistanciaLogo
            height="119.999999"
            width="375"
            colorMode={colorMode}
          />
          <ul className="flex flex-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  className="inline-block px-6 py-4 hover:bg-blue-700"
                  to={item.href}
                >
                  {item.caption}
                </Link>
              </li>
            ))}
            <ColorModeSwitcher />
          </ul>
          <Link
            to="/carrito-compras"
            className="inline-block px-6 py-4 hover:bg-blue-800 bg-blue-500"
          >
            <IconContext.Provider
              value={{ className: "inline-block mr-2 text-xl" }}
            >
              <IoMdCart></IoMdCart>
            </IconContext.Provider>
            {shopping_cart.length}
          </Link>
        </nav>
      </header>
    </Box>
  )
}

const mapStateToProps = ({ shopping_cart }) => ({ shopping_cart })
export default connect(mapStateToProps)(Navbar)
