import { Routes } from '@angular/router';
import { TwoWayBinding } from './components/two-way-binding/two-way-binding';
import { EventBinding } from './components/event-binding/event-binding';
import { App } from './app';

export const routes: Routes = [
    // {
    //     path: '', component: App
    // },
    {
        path: 'twoBinding', component: TwoWayBinding
    },
    {
        path: 'eventBinding', component: EventBinding
    },
    {
        path: 'viewReference', loadComponent:()=> import('./components/template-reference-variable/template-reference-variable').then(c=> c.TemplateReferenceVariable)
    }
];
