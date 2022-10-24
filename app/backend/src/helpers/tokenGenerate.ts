import dotenv = require('dotenv');
import { sign } from 'jsonwebtoken';
import { IUser } from '../interfaces/user';

dotenv.config();

const generateToken = async ({ email }: IUser) => {
  const KEY_SECRET = process.env.JWT_SECRET || 'jwt_secret';

  const payload = {
    email,
  };

  const jwtconfig = {
    expiresIn: '15d',
  };

  const token = sign(payload, KEY_SECRET, jwtconfig);

  return token;
};

export default generateToken;
