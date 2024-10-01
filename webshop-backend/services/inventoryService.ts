import { Product } from '../models/product';
import { IInventory } from '../interfaces/IInventory';

export class Inventory implements IInventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProductById(id: string): void {
    const productIndex = this.products.findIndex(product => product.id === id);
    this.products.splice(productIndex, 1);
  }

  findProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
  listAllProducts(): void {
    this.products.forEach(product => {
      console.log(`ID: ${product.id}, Név: ${product.name}, Ár: ${product.price} Ft ${product.description ? ', Leírás: ' + product.description : ''}`);
    });
  }
}