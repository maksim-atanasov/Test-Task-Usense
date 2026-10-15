import { Component, input } from '@angular/core';
import { HttpResourceRef } from '@angular/common/http';
import { ArticlesResponse } from '../../core/interfaces/article';
import { NewsCard } from '../../shared/components/news-card/news-card';
import { Loader } from '../../shared/ui/loader/loader';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-news-list',
  imports: [NewsCard, Loader, Button],
  templateUrl: './news-list.html',
  styleUrl: './news-list.scss',
})
export class NewsList {
  readonly news = input.required<HttpResourceRef<ArticlesResponse | undefined>>();
  readonly emptyText = input('Новин поки немає.');
}
