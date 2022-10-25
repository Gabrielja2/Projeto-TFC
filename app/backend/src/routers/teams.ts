import { Router } from 'express';
import TeamService from '../services/TeamService';
import TeamController from '../controllers/TeamController';

const teamsRouter = Router();

const teamService = new TeamService();
const teamController = new TeamController(teamService);

teamsRouter.get('/', teamController.getTeams);
teamsRouter.get('/:id', teamController.getTeamById);

export default teamsRouter;
