import { Component, inject } from '@angular/core';
import { NewsApi } from '../../core/services/news-api';
import { NewsCategory } from '../../shared/enums/news-category';
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

  protected readonly news = this.newsApi.topHeadlines(() => NewsCategory.General);
}
