import TeamModel from '../database/models/Team';

export default class TeamService {
  private model: TeamModel;

  public getTeams = async () => {
    const users = await TeamModel.findAll();

    return users;
  };

  public getTeam = async (id : string) => {
    const [user] = await TeamModel.findAll({ where: { id } });

    return user;
  };
}
