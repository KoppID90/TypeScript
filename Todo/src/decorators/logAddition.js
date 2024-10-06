"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogAddition = LogAddition;
function LogAddition(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Adding item...`);
        originalMethod.apply(this, args);
    };
}
