import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  imports: [],
  templateUrl: './progress-circle.component.html',
  styleUrl: './progress-circle.component.css'
})
export class ProgressCircleComponent {
  @Input() set percentage(value: number){
    this.show = Math.round(value * 100);
    this.styles = {
      background: `conic-gradient(rgb(97, 96, 96) ${value * 100 * 3.6}deg, white 0deg)`,
    }
  };
  show = 0;
  styles = {}
}
