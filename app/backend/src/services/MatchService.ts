import { ICreateMatch } from '../interfaces/match';
import MatcheModel from '../database/models/Matche';
import TeamModel from '../database/models/Team';

export default class MatchService {
  private _modelMatch: MatcheModel;
  private _modelTeam: TeamModel;

  public getMatches = async () => {
    const matches = await MatcheModel.findAll({ include: [
      { model: TeamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: TeamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
    });
    return matches;
  };

  public getMatchesInProgress = async (inProgress : boolean) => {
    const matchesInProgress = await MatcheModel.findAll({
      where: { inProgress },
      include: [
        { model: TeamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: TeamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matchesInProgress;
  };

  public createMatch = async (body : ICreateMatch) => {
    const newMatch = await MatcheModel.create({ ...body, inProgress: true });

    return newMatch;
  };
}
