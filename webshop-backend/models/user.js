"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const order_1 = require("./order");
let orderIdCounter = 0;
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    sendOrder(products) {
        orderIdCounter++;
        const orderId = `ORDER-${orderIdCounter}`;
        return new order_1.Order(orderId, products);
    }
}
exports.User = User;
