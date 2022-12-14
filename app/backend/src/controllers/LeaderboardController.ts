import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  private _service: LeaderboardService;

  constructor(service: LeaderboardService) {
    this._service = service;
  }

  public getHomeLeaderboard = async (_req: Request, res: Response) => {
    const homeLeaderboard = await this._service.getHomeLeaderboard();

    res.status(200).json(homeLeaderboard);
  };

  public getAwayLeaderboard = async (_req: Request, res: Response) => {
    const awayLeaderboard = await this._service.getAwayLeaderboard();

    res.status(200).json(awayLeaderboard);
  };

  public getLeaderboard = async (_req: Request, res: Response) => {
    const leaderboard = await this._service.getLeaderboard();

    res.status(200).json(leaderboard);
  };
}
