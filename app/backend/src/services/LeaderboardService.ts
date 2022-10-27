import leaderboardQuery from '../helpers/leaderboardHomeQuery';
import sequelize from '../database/models/index';

export default class LeaderboardService {
  constructor(private _model = sequelize) { }

  public getHomeLeaderboard = async () => {
    const [leaderboard] = await this._model.query(leaderboardQuery);

    return leaderboard;
  };
}
