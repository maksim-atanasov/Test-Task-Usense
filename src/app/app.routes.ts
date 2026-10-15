import { Routes } from '@angular/router';
import { categoryGuard } from './core/guards/category-guard';
import { NewsCategory } from './shared/enums/news-category';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: { category: NewsCategory.General },
  },
  {
    path: 'category/:category',
    canMatch: [categoryGuard],
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
