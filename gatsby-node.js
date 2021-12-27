// Aquí como es NodeJS se usa 'require' en vez de 'import'
const slugify = require("slugify")

// Reemplazamos los espacios por '-' y lo ponemos en minusculas
const sligifyOptions = {
  replacement: "-",
  lower: true,
}

// Le pasamos el slug a los node
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
        type StripeProduct implements Node{
            slug: String!
        }
    `)
}

// Le pasamos el slug que se creo al resolve (que de igual forma se declara aquí)
// En las argumentos le pasamos el 'name' del source y las reglas 'sligifyOptions'
exports.createResolvers = ({ createResolvers }) => {
  const stripeProducts = {
    StripeProduct: {
      slug: {
        resolve: source => {
          return slugify.default(source.name, sligifyOptions)
          // return source.name
        },
      },
    },
  }
  createResolvers(stripeProducts)
}

// Hacemos la consulta con graphql para que me de todos los productos
exports.createPages = async ({ actions, graphql }) => {
  const products = (
    await graphql(`
      {
        allStripeProduct {
          nodes {
            slug
            id
            name
          }
        }
      }
    `)
  ).data.allStripeProduct.nodes

  products.forEach(product => {
    actions.createPage({
      path: `productos/${product.slug}`,
      component: require.resolve("./src/templates/product.jsx"),
      context: {
        id: product.id,
      },
    })
  })
}
