import { Component, inject, Input, signal } from '@angular/core';
import { ProgressCircleComponent } from '../progress-circle/progress-circle.component';
import { CounterComponent } from '../counter/counter.component';
import { TodoServiceService } from '../../todo-service.service';
@Component({
  selector: 'app-progress',
  imports: [ProgressCircleComponent, CounterComponent],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
  constructor(){
    this.completedCount = this.todosService.getCompletedCount();
  }
  @Input() total = 0;
  completedCount = signal(0);
  todosService = inject(TodoServiceService);

}
