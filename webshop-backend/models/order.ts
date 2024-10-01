import { Product } from '../models/product';


export enum OrderStatus {
  New = "Új",
  Processing = "Feldolgozás alatt",
  Shipped = "Kiszállítva"
}

export class Order {
  public id: string;
  public products: Product[];
  public status: OrderStatus = OrderStatus.New;

  constructor(id: string, products: Product[]) {
    this.id = id;
    this.products = products;
  }

  public updateStatus(newStatus: OrderStatus): void {
    this.status = newStatus;
  }

  public getTotal(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}