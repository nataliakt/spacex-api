import express from 'express';
import {
  latestLaunch,
  nextLaunch,
  upcomingLaunch,
  pastLaunch
} from '../controllers/LaunchController';

const router = express.Router();

router.get('/latest', latestLaunch);
router.get('/next', nextLaunch);
router.get('/upcoming', upcomingLaunch);
router.get('/past', pastLaunch);

export default router;
