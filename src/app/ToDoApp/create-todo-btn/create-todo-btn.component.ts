import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-create-todo-btn',
  imports: [],
  templateUrl: './create-todo-btn.component.html',
  styleUrl: './create-todo-btn.component.css'
})
export class CreateTodoBtnComponent {
  @Input() showCreateTodo = signal(false);

  clickHandler(){
    this.showCreateTodo.set(true);
  }
}
