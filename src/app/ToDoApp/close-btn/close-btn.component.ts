import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-close-btn',
  imports: [],
  templateUrl: './close-btn.component.html',
  styleUrl: './close-btn.component.css'
})
export class CloseBtnComponent {
  @Input() showComponent = signal(true);

  clickHandler(){
    this.showComponent.set(false);
  }
}
