import { verify, sign, JwtPayload } from 'jsonwebtoken';
import dotenv = require('dotenv');
import { IUser } from '../interfaces/user';
import CustomError from './customError';

dotenv.config();

const generateToken = async (payload: IUser) => {
  const jwtconfig = {
    expiresIn: '15d',
  };

  const token = sign({ payload }, 'jwt_secret', jwtconfig);

  return token;
};

export const decodeToken = (token: string) => {
  try {
    const decodedtoken = verify(token, 'jwt_secret') as JwtPayload;

    return decodedtoken;
  } catch (error) {
    throw new CustomError(401, 'Token must be a valid token');
  }
};

export default generateToken;
