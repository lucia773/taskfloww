import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout').then(
        (m) => m.PublicLayoutComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./layouts/private-layout/private-layout').then(
        (m) => m.PrivateLayoutComponent,
      ),
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./features/tasks/task-list/task-list/task-list').then((m) => m.TaskListComponent),
  },
  {
    path: 'tasks/:id',
    loadComponent: () =>
      import('./features/tasks/task-detail/task-detail/task-detail').then(
        (m) => m.TaskDetailComponent,
      ),
  },
  {
    path: 'tasks/new',
    loadComponent: () =>
      import('./features/tasks/task-form/task-form/task-form').then((m) => m.TaskFormComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
