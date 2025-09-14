import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  imports: [],
  templateUrl: './template-reference-variable.html',
  styleUrl: './template-reference-variable.css'
})
export class TemplateReferenceVariable {

  inputText: String = '';
  print(text: any){
    console.log(text);
    this.inputText = text;
  }

  printONChange(event: Event){
    const input = (event.target as HTMLInputElement).value;
    this.inputText = input;
    console.log("event: " + input);
  }
}
