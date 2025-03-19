import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-filter-btn',
  imports: [],
  templateUrl: './filter-btn.component.html',
  styleUrl: './filter-btn.component.css'
})
export class FilterBtnComponent {
  @Input() showFilter = signal(false);

  clickHandler(){
    this.showFilter.update((show) => !show);
    console.log(this.showFilter());
  }
}
