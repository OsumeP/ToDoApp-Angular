import { Component, Input, signal, inject, WritableSignal, computed} from '@angular/core';
import { CheckComponent } from '../check/check.component';
import { DeleteComponent } from '../delete/delete.component';
import { TodoServiceService } from '../../todo-service.service';
import { TodoModel } from '../../todo-model';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-item',
  imports: [CheckComponent, DeleteComponent, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  todo = new TodoModel(-1, '');
  id = 0;
  task = signal('');
  completed = signal(false);
  todoList: WritableSignal<TodoModel[]>;
  todosService = inject(TodoServiceService);
  todosCompleted = signal(0);
  edit = signal(false);
  editInput = new FormControl(this.task(), {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  })


  @Input() set toDo(value: TodoModel) {
    this.todo = value;
    this.task.set(value.task);
    this.completed.set(value.completed);
    this.id = value.id;
  };

  constructor(){
    this.todoList = this.todosService.getTodoList();
    this.todosCompleted = this.todosService.getCompletedCount();
  }

  checkHandler(){
    this.completed.set(!this.completed());
    this.todosService.saveCompletedCount((this.completed()) ? this.todosCompleted() + 1 : this.todosCompleted() - 1);
    this.todo.completed = this.completed();
    this.todosService.saveTodoList([...this.todoList()])
  }
  deleteHandler(){
    let arr = [];
    for(let element of this.todoList()){
      if(element.id != this.id) arr.push(element);
    }
    if(this.completed()) this.todosService.saveCompletedCount(this.todosCompleted() - 1);
    this.todosService.saveTodoList(arr);
  }

  editMode(){
    if(this.completed()) return;
    this.editInput.setValue(this.task());
    console.log('a');
    this.edit.set(true);
  }

  saveEdit(){
    if(!this.editInput.valid) return;
    this.todo.task = this.editInput.value;
    this.todosService.saveTodoList(this.todoList());
    this.task.set(this.editInput.value)
    this.edit.set(false);
  }
}
