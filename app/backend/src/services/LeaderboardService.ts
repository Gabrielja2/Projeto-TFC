import awayLeaderboardQuery from '../helpers/awayLeaderboardQuery';
import homeLeaderboardQuery from '../helpers/leaderboardHomeQuery';
import leaderboardQuery from '../helpers/leaderboardQuery';
import sequelize from '../database/models/index';

export default class LeaderboardService {
  constructor(private _model = sequelize) { }

  public getHomeLeaderboard = async () => {
    const [homeLeaderboard] = await this._model.query(homeLeaderboardQuery);

    return homeLeaderboard;
  };

  public getAwayLeaderboard = async () => {
    const [awayLeaderboard] = await this._model.query(awayLeaderboardQuery);

    return awayLeaderboard;
  };

  public getLeaderboard = async () => {
    const [leaderboard] = await this._model.query(leaderboardQuery);

    return leaderboard;
  };
}
