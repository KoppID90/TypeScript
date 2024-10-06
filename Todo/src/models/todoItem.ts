export namespace models {

export class TodoItem<T>{

    private id: number;
    private content: T;

    constructor(id: number, content: T) {
        this.id = id;
        this.content = content;
    }

    get ID(): number {
        return this.id;
    }
    
    get Content(): T {
        return this.content;
    }
    
}
}