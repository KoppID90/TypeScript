import { Product } from '../models/product';

export interface IInventory {
  addProduct(product: Product): void;
  findProductById(id: string): Product | undefined;
}