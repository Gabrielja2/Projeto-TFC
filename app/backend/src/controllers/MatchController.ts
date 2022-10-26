import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  private _service: MatchService;

  constructor(service: MatchService) {
    this._service = service;
  }

  public getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const state = inProgress === 'true';
    const matches = await this._service.getMatches();
    if (inProgress) {
      const matchesInProgress = await this._service.getMatchesInProgress(state);
      res.status(200).json(matchesInProgress);
    }

    res.status(200).json(matches);
  };

  public createMatch = async (req: Request, res: Response) => {
    const newMatch = await this._service.createMatch(req.body);

    res.status(201).json(newMatch);
  };

  public updateMatch = async (req: Request, res: Response) => {
    await this._service.updateMatch(req.params.id);

    res.status(200).json({ message: 'Finished' });
  };
}
