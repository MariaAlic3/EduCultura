import express from 'express';
import { getUniversidades} from '../controller/Universidades.controller.js';

const router = express.Router();

router.get('/', getUniversidades);
// /universidades?cota=racial

export default router;