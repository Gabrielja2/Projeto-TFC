import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  private _service: MatchService;

  constructor(service: MatchService) {
    this._service = service;
  }

  public getMatches = async (_req: Request, res: Response) => {
    const matches = await this._service.getMatches();

    res.status(200).json(matches);
  };
}
