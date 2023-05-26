export const productTypesDefs = `#graphql
  input ProductIn {
    name: String!
    image: String!
    slug: String!
    normalPrice: Int!
    internetPrice: Int!
    cardPrice: Int!
    category: String!
    subCategory: String!
  }

  type Product {
    code: ID!
    name: String!
    image: String!
    slug: String!
    normalPrice: Int!
    internetPrice: Int!
    cardPrice: Int!
    category: String!
    subCategory: String!
  }

  type Query {
    products(category: String!, subCategory: String): [Product]
    product(code: String!): Product
  }

  type Mutation {
    product(data: ProductIn): Product
  }
`;
