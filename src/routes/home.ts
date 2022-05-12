import express from 'express';
import {
  homeCompiled
} from '../controllers/HomeController';

const router = express.Router();

router.get('/', homeCompiled);

export default router;
