import { Schema, model } from 'mongoose';
import { IProduct } from './products.d';

const productSchema = new Schema<IProduct>({
  code: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  normalPrice: {
    type: Number,
    required: true
  },
  internetPrice: {
    type: Number,
    required: true
  },
  cardPrice: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  }
});

const productModel = model<IProduct>('products', productSchema);

export default productModel;
