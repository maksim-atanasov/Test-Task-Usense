import { Component, computed, inject, input } from '@angular/core';
import { NewsApi } from '../../core/services/news-api';
import { NewsCategory } from '../../shared/enums/news-category';
import { NEWS_CATEGORY_LABELS } from '../../shared/constants/news-category-labels';
import { Container } from '../../shared/ui/container/container';
import { Title } from '../../shared/ui/title/title';
import { NewsList } from '../../features/news-list/news-list';

@Component({
  selector: 'app-home',
  imports: [Container, Title, NewsList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly newsApi = inject(NewsApi);

  readonly category = input.required<NewsCategory>();

  protected readonly title = computed(() =>
    this.category() === NewsCategory.General
      ? 'Останні новини'
      : NEWS_CATEGORY_LABELS[this.category()],
  );
  protected readonly news = this.newsApi.topHeadlines(this.category);
}
