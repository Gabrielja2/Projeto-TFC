import { Request, Response, NextFunction } from 'express';
import { decodeToken } from '../helpers/tokenGenerate';

function tokenMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  decodeToken(authorization as string);

  next();
}

export default tokenMiddleware;
