import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  private _service: LeaderboardService;

  constructor(service: LeaderboardService) {
    this._service = service;
  }

  public getHomeLeaderboard = async (_req: Request, res: Response) => {
    const leaderboard = await this._service.getHomeLeaderboard();

    res.status(200).json(leaderboard);
  };
}
