"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./models/todoItem");
const todoList_1 = require("./services/todoList");
const todoList = new todoList_1.services.TodoList();
const todoItem = new todoItem_1.models.TodoItem(1, { message: "TypeScript TODO list", dueDate: new Date() });
todoList.addItem(todoItem);
const todos = todoList.listTodos();
console.log(todos);
