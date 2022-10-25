import { Router } from 'express';
import TeamService from '../services/TeamService';
import TeamController from '../controllers/TeamController';

const router = Router();

const teamService = new TeamService();
const teamController = new TeamController(teamService);

router.get('/', teamController.getTeams);
router.get('/:id', teamController.getTeamById);

export default router;
