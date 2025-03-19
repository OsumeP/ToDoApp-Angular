import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() filterList = [''];
  @Input() filter = signal(0);

  applyFilter(index : number){
    this.filter.set(index);
  }
}
