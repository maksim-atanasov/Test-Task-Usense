import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { filter } from 'rxjs';
import { SearchIcon } from '../../shared/svg-icons/search-icon/search-icon';

@Component({
  selector: 'app-search-form',
  imports: [FormRoot, FormField, SearchIcon],
  templateUrl: './search-form.html',
  styleUrl: './search-form.scss',
})
export class SearchForm {
  private readonly router = inject(Router);

  private readonly model = signal({ query: '' });

  protected readonly searchForm = form(this.model, {
    submission: {
      action: async (field) => {
        const query = field.query().value().trim();

        if (query) {
          await this.router.navigate(['/search'], { queryParams: { q: query } });
        }
      },
    },
  });

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        const query = this.router.parseUrl(this.router.url).queryParams['q'] ?? '';
        this.model.set({ query });
      });
  }
}
