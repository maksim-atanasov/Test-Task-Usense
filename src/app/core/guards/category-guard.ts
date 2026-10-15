import { CanMatchFn } from '@angular/router';
import { NewsCategory } from '../../shared/enums/news-category';

export const categoryGuard: CanMatchFn = (_route, segments) =>
  Object.values<string>(NewsCategory).includes(segments[1]?.path);
