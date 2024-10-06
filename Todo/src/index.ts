import { models } from './models/todoItem';
import { services } from './services/todoList';
import { LogAddition } from './decorators/logAddition';
import { utils } from './utils/typeGuards';

interface TodoContent {
    message: string;
    dueDate: Date;
}

const todoList = new services.TodoList<TodoContent>();

const todoItem = new models.TodoItem<TodoContent>(1, { message: "TypeScript TODO list", dueDate: new Date() });

todoList.addItem(todoItem);

const todos = todoList.listTodos();
console.log(todos);