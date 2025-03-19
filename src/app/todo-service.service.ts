import { inject, Injectable, signal } from '@angular/core';
import { TodoModel } from './todo-model';
import { UseLocalStorageService } from './use-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  protected todoList = signal([new TodoModel(0, 'Una todo')]);
  protected completedCount = signal(0);
  protected localStorage = inject(UseLocalStorageService);
  protected loading = signal(true);
  protected error = signal(false);

  constructor() { 
    this.loading = this.localStorage.getLoading();
    this.error = this.localStorage.getError();
    this.initialize();
  }

  async initialize(){
    let item = await this.localStorage.getItem('Todos');
    if(item) this.todoList.set(item);
    item = await this.localStorage.getItem('completedCount');
    if(item) this.completedCount.set(item);
  }

  getLoading(){return this.loading}
  getError(){return this.error}

  getTodoList(){ return this.todoList;}
  saveTodoList(list: TodoModel[]){
    this.todoList.set(list);
    this.localStorage.saveItem(JSON.stringify(list), 'Todos');
  }

  getCompletedCount() {return this.completedCount}
  saveCompletedCount(count: number){
    this.completedCount.set(count);
    this.localStorage.saveItem(JSON.stringify(count), 'completedCount');
  }
}
