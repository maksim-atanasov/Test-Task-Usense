import { Component, DOCUMENT, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NewsCategory } from '../../shared/enums/news-category';
import { NEWS_CATEGORY_LABELS } from '../../shared/constants/news-category-labels';

@Component({
  selector: 'app-category-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './category-nav.html',
  styleUrl: './category-nav.scss',
})
export class CategoryNav {
  private readonly document = inject(DOCUMENT);

  protected readonly categories = Object.values(NewsCategory);
  protected readonly labels = NEWS_CATEGORY_LABELS;
  protected readonly general = NewsCategory.General;

  protected async scrollToLink(nav: HTMLElement, link: HTMLElement): Promise<void> {
    await this.document.fonts.ready;

    nav.scrollTo({
      left: link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2,
      behavior: 'smooth',
    });
  }
}
