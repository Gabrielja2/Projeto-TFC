import TeamModel from '../database/models/Team';

export default class TeamService {
  private model: TeamModel;

  public getTeams = async () => {
    const teams = await TeamModel.findAll();

    return teams;
  };

  public getTeam = async (id : string) => {
    const [team] = await TeamModel.findAll({ where: { id } });

    return team;
  };
}
