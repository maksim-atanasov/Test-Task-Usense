import { NewsCategory } from '../enums/news-category';

export const NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  [NewsCategory.General]: 'Головне',
  [NewsCategory.World]: 'Світ',
  [NewsCategory.Business]: 'Бізнес',
  [NewsCategory.Technology]: 'Технології',
  [NewsCategory.Entertainment]: 'Розваги',
  [NewsCategory.Sports]: 'Спорт',
  [NewsCategory.Science]: 'Наука',
  [NewsCategory.Health]: "Здоров'я",
};
