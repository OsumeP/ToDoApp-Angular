import { Component, signal, inject, WritableSignal, computed } from '@angular/core';
import { ProgressComponent } from '../progress/progress.component';
import { LoadingComponent } from '../loading/loading.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CounterComponent } from '../counter/counter.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { EmptyTodoComponent } from "../empty-todo/empty-todo.component";
import { CreateTodoBtnComponent } from "../create-todo-btn/create-todo-btn.component";
import { CreateTodoComponent } from "../create-todo/create-todo.component";
import { TodoServiceService } from '../../todo-service.service';
import { TodoModel } from '../../todo-model';
import { FilterBtnComponent } from "../filter-btn/filter-btn.component";
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'todo-app',
  imports: [ProgressComponent, FilterComponent,LoadingComponent, TodoItemComponent, CounterComponent, SearchBarComponent, EmptyTodoComponent, CreateTodoBtnComponent, CreateTodoComponent, FilterBtnComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  toDos: WritableSignal<TodoModel[]>;
  todosService = inject(TodoServiceService);
  searchValue = signal('');
  loading = signal(false);
  error = signal(false);
  showCreateTodo = signal(false);
  completedCount = signal(0)
  //0: all, 1: completed, 2: Pending
  filter = signal(0);
  showFilter = signal(false);
  filteredList = computed(() => {
    const list = this.toDos();
    const filter = this.filter();

    if (filter === 2) return list.filter((todo) => !todo.completed);
    if (filter === 1) return list.filter((todo) => todo.completed);
    return list;
  })

  constructor() {
    this.toDos = this.todosService.getTodoList();
    this.loading = this.todosService.getLoading();
    this.error = this.todosService.getError();
    this.completedCount = this.todosService.getCompletedCount();
  }
}
