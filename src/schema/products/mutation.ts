import { GraphQLError } from 'graphql';
import { IProduct } from '../../models/products';
import { createProduct } from '../../services/products';

export const productsMutation = {
  product: async (parent: undefined, { data }: { data: Omit<IProduct, 'code'> }) => {
    try {
      return await createProduct(data);
    } catch (e) {
      throw new GraphQLError((e as Error).message, {
        extensions: {
          code: 'ERROR_CREATING_PRODUCT'
        }
      });
    }
  }
};
