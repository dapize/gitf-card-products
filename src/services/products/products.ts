import { randomUUID } from 'crypto';
import productModel, { IProduct } from '../../models/products';

export const getProductByCode = async (code: string) => {
  const product = await productModel.findOne({ code });
  if (!product) {
    throw new Error(`Product with code: "${code}" not found.`);
  }
  return product;
};

export const createProduct = async (data: Omit<IProduct, 'code'>) => {
  const { name } = data;
  const findProduct = await productModel.findOne({ name });
  if (findProduct) {
    throw new Error('Cannot add a product already exists.');
  }
  return await productModel.create({ ...data, code: randomUUID() });
};

export const getProductsBy = async (category: string, subCategory?: string) => {
  const query: { category: string; subCategory?: string } = { category };
  if (subCategory) query.subCategory = subCategory;
  return await productModel.find(query);
};
