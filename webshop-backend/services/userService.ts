import { User } from '../models/user';
import { Product } from '../models/product';
import { Inventory } from './inventoryService';

export class UserService {
  private users: User[] = [];

  createUser(id: string, name: string, email: string): User {
    const user = new User(id, name, email);
    this.users.push(user);
    return user;
  }

}