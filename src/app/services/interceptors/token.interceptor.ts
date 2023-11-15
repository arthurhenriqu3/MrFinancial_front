import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  req.clone({
    headers: req.headers.set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaS1tcmZpbmFuY2lhbCIsInN1YiI6ImFydGh1ckBnbWFpbC5jb20iLCJleHAiOjE3MDAwOTUzMzl9.-wgLccjW1_ULSJmCSIluEmgyVUXsQNozYwqDTCRVjEo")
  })
  return next(req);
};
