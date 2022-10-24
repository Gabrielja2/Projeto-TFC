import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  private _service: UserService;

  constructor(service: UserService) {
    this._service = service;
  }

  public login = async (req: Request, res: Response) => {
    console.log('req', req);
    console.log('res', res);
    const token = await this._service.login(req.body);
    console.log('aki', token);
    res.status(200).json({ token });
  };
}
