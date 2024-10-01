"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["New"] = "\u00DAj";
    OrderStatus["Processing"] = "Feldolgoz\u00E1s alatt";
    OrderStatus["Shipped"] = "Kisz\u00E1ll\u00EDtva";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
class Order {
    constructor(id, products) {
        this.status = OrderStatus.New;
        this.id = id;
        this.products = products;
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
    getTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
exports.Order = Order;
