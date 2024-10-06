"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
var models;
(function (models) {
    class TodoItem {
        constructor(id, content) {
            this.id = id;
            this.content = content;
        }
        get ID() {
            return this.id;
        }
        get Content() {
            return this.content;
        }
    }
    models.TodoItem = TodoItem;
})(models || (exports.models = models = {}));
