import bcrypt = require('bcryptjs');
import { Request, Response } from 'express';
import CustomError from '../helpers/customError';
import generateToken from '../helpers/tokenGenerate';
import UserService from '../services/UserService';

export default class UserController {
  private _service: UserService;

  constructor(service: UserService) {
    this._service = service;
  }

  public login = async (req: Request, res: Response) => {
    const user = await this._service.login(req.body);
    console.log('maisumavez', user);
    const validatePassword = await bcrypt.compare(req.body.password, user.password);
    if (!validatePassword) throw new CustomError(401, 'Incorrect email or password');

    const token = await generateToken(user);

    res.status(200).json({ token });
  };

  public validate = async (req: Request, res: Response) => {
    const { authorization } = req.headers;

    const role = await this._service.getRole(authorization as string);

    res.status(200).json({ role });
  };
}
