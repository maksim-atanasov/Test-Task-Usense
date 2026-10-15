import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

const STORAGE_KEY = 'articles';
const MAX_ARTICLES = 100;

@Injectable({ providedIn: 'root' })
export class ArticleStorage {
  private readonly articles = new Map<string, Article>(this.read());

  save(articles: Article[]): void {
    for (const article of articles) {
      this.articles.delete(article.id);
      this.articles.set(article.id, article);
    }

    for (const id of this.articles.keys()) {
      if (this.articles.size <= MAX_ARTICLES) {
        break;
      }
      this.articles.delete(id);
    }

    this.write();
  }

  get(id: string): Article | undefined {
    return this.articles.get(id);
  }

  private read(): [string, Article][] {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    } catch {
      return [];
    }
  }

  private write(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...this.articles]));
    } catch {
      console.error('Error writing article')
    }
  }
}
