import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-view-children-querylist-elementref',
  imports: [FormsModule, CommonModule],
  templateUrl: './view-children-querylist-elementref.html',
  styleUrl: './view-children-querylist-elementref.css'
})
export class ViewChildrenQuerylistElementref {

  @ViewChildren('field') fields!: QueryList<ElementRef>;

  names: string[]= [];

  addField(){

     this.fields.forEach((e)=> {
      const newField = e.nativeElement.value;
      if(newField){
      this.names.push(newField);
      }
    });
  
  }
}
