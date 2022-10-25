import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  private _service: TeamService;

  constructor(service: TeamService) {
    this._service = service;
  }

  public getTeams = async (_req: Request, res: Response) => {
    const users = await this._service.getTeams();

    res.status(200).json(users);
  };

  public getTeamById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this._service.getTeam(id);

    res.status(200).json(user);
  };
}
