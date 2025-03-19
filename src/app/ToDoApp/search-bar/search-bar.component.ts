import { Component, Input, signal, Signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() searchedVal = signal('');
  searchControl = new FormControl();

  constructor(){
    this.searchControl.valueChanges.subscribe((value) => {this.searchedVal.set(value)});
  }
}
