import CustomError from '../helpers/customError';
import { ICreateMatch, IUpdateGoals } from '../interfaces/match';
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

    const matchByAwayTeamId = await MatcheModel.findByPk(body.awayTeam);
    const matchByHomeTeamId = await MatcheModel.findByPk(body.homeTeam);

    if (!matchByAwayTeamId || !matchByHomeTeamId) {
      throw new CustomError(404, 'There is no team with such id!');
    }

    return newMatch;
  };

  public updateMatch = async (id: string, body: IUpdateGoals) => {
    const { homeTeamGoals, awayTeamGoals } = body;
    await MatcheModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });

    const updated = await MatcheModel.findOne({ where: { id } });
    return updated;
  };

  public finishMatch = async (id : string) => {
    const matchToUpdate = await MatcheModel.update({ inProgress: false }, { where: { id } });

    return matchToUpdate;
  };
}
