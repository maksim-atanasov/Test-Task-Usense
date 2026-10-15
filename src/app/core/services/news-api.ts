import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { ArticlesResponse } from '../interfaces/article';
import { NewsCategory } from '../../shared/enums/news-category';
import { GNEWS_LANG, GNEWS_PAGE_SIZE } from '../config/gnews';

@Injectable({ providedIn: 'root' })
export class NewsApi {
  topHeadlines(category: () => NewsCategory) {
    return httpResource<ArticlesResponse>(() => ({
      url: 'top-headlines',
      params: { category: category(), lang: GNEWS_LANG, max: GNEWS_PAGE_SIZE },
    }));
  }

  search(query: () => string) {
    return httpResource<ArticlesResponse>(() => {
      const q = query().trim();

      if (!q) {
        return undefined;
      }

      return {
        url: 'search',
        params: { q, lang: GNEWS_LANG, max: GNEWS_PAGE_SIZE },
      };
    });
  }
}
