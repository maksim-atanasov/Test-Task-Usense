import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, tap } from 'rxjs';

const CACHE_TTL = 5 * 60 * 1000; // 5 min

const cache = new Map<string, { response: HttpResponse<unknown>; expiresAt: number }>();

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  // !!! I know that this interceptor will cache every api method.
  // But I'll not change it because of no need (project have only 2 get methods)
  const cached = cache.get(req.urlWithParams);

  if (cached && cached.expiresAt > Date.now()) {
    return of(cached.response.clone());
  }

  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        cache.set(req.urlWithParams, { response: event, expiresAt: Date.now() + CACHE_TTL });
      }
    }),
  );
};
