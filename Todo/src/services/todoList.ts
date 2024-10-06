import { models } from '../models/todoItem';
import { LogAddition } from '../decorators/logAddition';
import { utils } from '../utils/typeGuards';

export namespace services {
  export class TodoList<T> {
    private todos: Map<number, models.TodoItem<T>>;

    constructor() {
      this.todos = new Map<number, models.TodoItem<T>>();
    }

    private validateTodoItem(item: models.TodoItem<T>): boolean {
        const isValidMessage = utils.isString(item.Content);

        if (!isValidMessage) {
            console.error("Content must be a string.");
            return false;
        }
        return true;
    }

    /* @LogAddition */
    addItem(item: models.TodoItem<T>): void {
        if (this.validateTodoItem(item)) { 
            this.todos.set(item.ID, item);
        }
    }

    deleteTodo(id: number): boolean {
      return this.todos.delete(id);
    }

    listTodos(): models.TodoItem<T>[] {
      return Array.from(this.todos.values());
    }
  }
}