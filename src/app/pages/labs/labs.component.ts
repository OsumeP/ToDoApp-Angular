import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  user = signal({
    name : 'OsumeP',
    img : 'https://github.com/OsumeP.png',
  });

  keyDownHandler(event: Event){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

  changeInputHandler(event: Event){
    const input = event.target as HTMLInputElement;
    this.user().name = input.value;
  }
}
