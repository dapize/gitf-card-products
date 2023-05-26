import { GraphQLError } from 'graphql';
import { getProductByCode, getProductsBy } from '../../services/products';

export const productsQuery = {
  product: async (parent: undefined, { code }: { code: string }) => {
    try {
      return await getProductByCode(code);
    } catch (e) {
      throw new GraphQLError((e as Error).message, {
        extensions: {
          code: 'NOT_FOUND'
        }
      });
    }
  },
  products: async (parent: undefined, { category, subCategory }: { category: string; subCategory?: string }) => {
    return await getProductsBy(category, subCategory);
  }
};
