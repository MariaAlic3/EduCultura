import express from 'express';
import { getMuseumPorCidade } from '../controller/Museus.controller.js';

const router= express.Router();


router.get('/', getMuseumPorCidade);
// /museus?cidade=salvador

export default router;