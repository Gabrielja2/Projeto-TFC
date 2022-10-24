import { Request, Response, NextFunction } from 'express';
import CustomError from '../helpers/customError';
import loginSchema from '../schemas/loginSchema';

function loginMiddleware(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });

  if (error) throw new CustomError(400, error.message);
  next();
}

export default loginMiddleware;
