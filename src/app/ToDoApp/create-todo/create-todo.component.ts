import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { CloseBtnComponent } from '../close-btn/close-btn.component';
import { TodoModel } from '../../todo-model';
import { TodoServiceService } from '../../todo-service.service';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  imports: [CloseBtnComponent, ReactiveFormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent {
  @Input() todos: WritableSignal<TodoModel[]>;
  todosService = inject(TodoServiceService);
  createInput = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });
  @Input() showComponent = signal(false);
  
  constructor(){
    this.todos = signal([new TodoModel(-1, '')]);
  }

  addTodo(){
    if(!this.createInput.valid) return;
    let val = this.createInput.value.trim();
    if(val === '') return;
    let identifier = (this.todos().length == 0) ? 1 : this.todos()[this.todos().length - 1].id - 1;
    this.todosService.saveTodoList([...this.todos(), new TodoModel(identifier, val)]);
    this.createInput.setValue('');
  }

  closeHandler(){
    this.showComponent.set(false);
  }
}
