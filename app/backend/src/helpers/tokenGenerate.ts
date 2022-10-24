import { verify, sign, JwtPayload } from 'jsonwebtoken';
import dotenv = require('dotenv');
import { IUser } from '../interfaces/user';

dotenv.config();

const generateToken = async (payload: IUser) => {
  const KEY_SECRET = process.env.JWT_SECRET || 'jwt_secret';

  const jwtconfig = {
    expiresIn: '15d',
  };

  const token = sign({ payload }, KEY_SECRET, jwtconfig);

  return token;
};

export const decodeToken = (token: string) => {
  const decodedtoken = verify(token, 'jwt_secret') as JwtPayload;

  return decodedtoken;
};

export default generateToken;
