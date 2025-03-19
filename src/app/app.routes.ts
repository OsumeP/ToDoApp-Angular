import { Routes } from '@angular/router';
import { LabsComponent } from './pages/labs/labs.component';
import { TodoComponent } from './ToDoApp/todo/todo.component';

export const routes: Routes = [
    {
        path : '',
        component : TodoComponent
    },
    {
        path: 'labs',
        component: LabsComponent
    }
];
