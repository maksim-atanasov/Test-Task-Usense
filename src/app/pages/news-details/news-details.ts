import { Component, computed, inject, input, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsApi } from '../../core/services/news-api';
import { Container } from '../../shared/ui/container/container';
import { Title } from '../../shared/ui/title/title';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-news-details',
  imports: [DatePipe, RouterLink, Container, Title, Button],
  templateUrl: './news-details.html',
  styleUrl: './news-details.scss',
})
export class NewsDetails {
  private readonly newsApi = inject(NewsApi);

  readonly id = input.required<string>();

  protected readonly article = computed(() => this.newsApi.getArticle(this.id()));
  protected readonly content = computed(() =>
    this.article()?.content.replace(/\s*\[\d+ chars\]$/, ''), // to remove in the end "[1715 chars]"
  );
  protected readonly imageFailed = signal(false);
}
