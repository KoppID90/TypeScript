"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProductById(id) {
        const productIndex = this.products.findIndex(product => product.id === id);
        this.products.splice(productIndex, 1);
    }
    findProductById(id) {
        return this.products.find(product => product.id === id);
    }
    listAllProducts() {
        this.products.forEach(product => {
            console.log(`ID: ${product.id}, Név: ${product.name}, Ár: ${product.price} Ft ${product.description ? ', Leírás: ' + product.description : ''}`);
        });
    }
}
exports.Inventory = Inventory;
