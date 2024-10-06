"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const typeGuards_1 = require("../utils/typeGuards");
var services;
(function (services) {
    class TodoList {
        constructor() {
            this.todos = new Map();
        }
        validateTodoItem(item) {
            const isValidMessage = typeGuards_1.utils.isString(item.Content);
            if (!isValidMessage) {
                console.error("Content must be a string.");
                return false;
            }
            return true;
        }
        /* @LogAddition */
        addItem(item) {
            if (this.validateTodoItem(item)) {
                this.todos.set(item.ID, item);
            }
        }
        deleteTodo(id) {
            return this.todos.delete(id);
        }
        listTodos() {
            return Array.from(this.todos.values());
        }
    }
    services.TodoList = TodoList;
})(services || (exports.services = services = {}));
