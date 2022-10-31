import { Router } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardRouter = Router();

const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

leaderboardRouter.get('/home', leaderboardController.getHomeLeaderboard);
leaderboardRouter.get('/away', leaderboardController.getAwayLeaderboard);
leaderboardRouter.get('/', leaderboardController.getLeaderboard);

export default leaderboardRouter;
