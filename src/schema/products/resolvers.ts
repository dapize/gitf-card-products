import { productsMutation } from './mutation';
import { productsQuery } from './query';

export const productResolvers = {
  Query: {
    ...productsQuery
  },
  Mutation: {
    ...productsMutation
  }
};
