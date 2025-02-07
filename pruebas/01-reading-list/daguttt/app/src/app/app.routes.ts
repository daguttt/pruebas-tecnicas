import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    loadComponent: () => import('./books/books-page.component'),
  },
  {
    path: '**',
    redirectTo: 'books',
  },
];
