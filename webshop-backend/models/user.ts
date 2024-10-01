import { Order } from './order'; 
import { Product } from './product'; 
import { IInventory } from '../interfaces/IInventory';

let orderIdCounter = 0;

export class User {
  public id: string;
  public name: string;
  public email: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  sendOrder(products: Product[]): Order | undefined {
    orderIdCounter++;
    const orderId = `ORDER-${orderIdCounter}`;
    return new Order(orderId, products);
  }

}