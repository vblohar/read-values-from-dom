import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateReferenceVariable } from "./components/template-reference-variable/template-reference-variable";
import { TwoWayBinding } from "./components/two-way-binding/two-way-binding";
import { ViewChildAndRenderer2WithElementRef } from "./components/view-child-and-renderer2-with-element-ref/view-child-and-renderer2-with-element-ref";
import { EventBinding } from "./components/event-binding/event-binding";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateReferenceVariable, TwoWayBinding, ViewChildAndRenderer2WithElementRef, EventBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('read-values-from-dom');
}
