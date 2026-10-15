import { Component, input, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../../core/interfaces/article';
import { LogoIcon } from '../../svg-icons/logo-icon/logo-icon';

@Component({
  selector: 'app-news-card',
  imports: [DatePipe, RouterLink, LogoIcon],
  templateUrl: './news-card.html',
  styleUrl: './news-card.scss',
})
export class NewsCard {
  readonly article = input.required<Article>();

  protected readonly imageFailed = signal(false);
}
