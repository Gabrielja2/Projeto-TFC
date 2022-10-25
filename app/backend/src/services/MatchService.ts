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
}
