export class TodoModel {
    id: number;
    task: string;
    completed: boolean;
    constructor(id: number, task : string){
        this.task = task;
        this.completed = false;
        this.id = id;
    }
}
