
import { Product } from './models/product';
import { Inventory } from './services/inventoryService';
import { UserService } from './services/userService';
import { OrderStatus } from './models/order';


const inventory = new Inventory();
const product1 = new Product('1', 'Laptop', 250000, 'Kiváló laptop');
const product2 = new Product('2', 'IPhone', 180000);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory);


const userService = new UserService();
const user = userService.createUser('1', 'Kiss János', 'kiss.janchii@gmail.com');
console.log(userService);
