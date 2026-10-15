import { inject, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Article, ArticlesResponse } from '../interfaces/article';
import { NewsCategory } from '../../shared/enums/news-category';
import { GNEWS_LANG, GNEWS_PAGE_SIZE } from '../config/gnews';
import { ArticleStorage } from './article-storage';

@Injectable({ providedIn: 'root' })
export class NewsApi {
  private readonly articleStorage = inject(ArticleStorage);

  topHeadlines(category: () => NewsCategory) {
    return httpResource<ArticlesResponse>(
      () => ({
        url: 'top-headlines',
        params: { category: category(), lang: GNEWS_LANG, max: GNEWS_PAGE_SIZE },
      }),
      { parse: (response) => this.storeArticles(response as ArticlesResponse) },
    );
  }

  search(query: () => string) {
    return httpResource<ArticlesResponse>(
      () => {
        const q = query().trim();

        if (!q) {
          return undefined;
        }

        return {
          url: 'search',
          params: { q, lang: GNEWS_LANG, max: GNEWS_PAGE_SIZE },
        };
      },
      { parse: (response) => this.storeArticles(response as ArticlesResponse) },
    );
  }

  getArticle(id: string): Article | undefined {
    return this.articleStorage.get(id);
  }

  private storeArticles(response: ArticlesResponse): ArticlesResponse {
    this.articleStorage.save(response.articles);
    return response;
  }
}
