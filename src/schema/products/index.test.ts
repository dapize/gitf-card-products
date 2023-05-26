import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import { productTypesDefs as typeDefs } from './typesDefs';
import { productResolvers as resolvers } from './resolvers';
import { ApolloServer, BaseContext, GraphQLResponse } from '@apollo/server';

describe('products', () => {
  let testServer: ApolloServer<BaseContext>;

  beforeAll(() => {
    testServer = new ApolloServer({
      typeDefs,
      resolvers
    });
  });

  afterAll(async () => {
    await testServer.stop();
  });

  test('I should any items When I send a bad category', async () => {
    const { body }: GraphQLResponse = await testServer.executeOperation({
      query: `#graphql
        query getProducts($category: String!) {
          products(category: $category) {
            name
          }
        }
      `,
      variables: {
        category: 'dasdasd'
      }
    });
    expect(body.singleResult.data?.foo).toMatchObject({
      products: []
    });

    expect(true).toBeTruthy();
  });
});

// export type GraphQLResponse<TData = Record<string, unknown>> = WithRequired<
//   GraphQLInProgressResponse<TData>,
//   'body'
// >;
