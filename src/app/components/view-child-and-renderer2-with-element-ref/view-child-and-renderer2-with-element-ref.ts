import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-and-renderer2-with-element-ref',
  imports: [],
  templateUrl: './view-child-and-renderer2-with-element-ref.html',
  styleUrl: './view-child-and-renderer2-with-element-ref.css'
})
export class ViewChildAndRenderer2WithElementRef {

  @ViewChild('inputText') inputMail!: ElementRef;

  constructor(private renderer: Renderer2){

  }

   inputMailId: string = '';
   inputEmail: string = '';

  showMail(){

    //Reading value using nativeElement (common way)
    this.inputMailId = this.inputMail.nativeElement.value;
    console.log(this.inputMailId);
  }


}
