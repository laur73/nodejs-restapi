import express from 'express';
import { ping } from '../controllers/indexController.js';

const router = express.Router();

router.get('/ping', ping);

export default router;