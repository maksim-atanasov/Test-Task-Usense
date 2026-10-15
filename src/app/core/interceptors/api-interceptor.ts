import { HttpInterceptorFn } from '@angular/common/http';
import { GNEWS_API_KEY, GNEWS_API_URL } from '../config/gnews';

export const apiInterceptor: HttpInterceptorFn = (req, next) =>
  next(
    req.clone({
      url: `${GNEWS_API_URL}/${req.url}`,
      setParams: { apikey: GNEWS_API_KEY },
    }),
  );
