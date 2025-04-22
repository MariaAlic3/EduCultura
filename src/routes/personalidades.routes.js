import express from 'express';
import { getPersonalidade } from '../controller/Personalidades.controller.js';

const router = express.Router();

router.get('/', getPersonalidade);
// /personalidades?nome=
// /personalidades?nome=marielle

export default router;