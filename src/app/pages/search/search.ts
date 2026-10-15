import { Component, computed, inject, input } from '@angular/core';
import { NewsApi } from '../../core/services/news-api';
import { Container } from '../../shared/ui/container/container';
import { Title } from '../../shared/ui/title/title';
import { NewsList } from '../../features/news-list/news-list';

@Component({
  selector: 'app-search',
  imports: [Container, Title, NewsList],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  private readonly newsApi = inject(NewsApi);

  readonly q = input<string>();

  protected readonly query = computed(() => this.q()?.trim() ?? '');
  protected readonly news = this.newsApi.search(this.query);
  protected readonly emptyText = computed(() =>
    this.query() ? 'За вашим запитом нічого не знайдено.' : 'Введіть запит, щоб знайти новини.',
  );
}
