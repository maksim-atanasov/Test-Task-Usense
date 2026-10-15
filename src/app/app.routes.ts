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
    path: 'search',
    loadComponent: () => import('./pages/search/search').then((m) => m.Search),
  },
  {
    path: 'news/:id',
    loadComponent: () => import('./pages/news-details/news-details').then((m) => m.NewsDetails),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
