import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {

name: string = '';

showName(event: Event){
  this.name = (event.target as HTMLInputElement).value;
}

}
