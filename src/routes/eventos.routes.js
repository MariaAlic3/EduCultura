import express from "express";
import { getEventos } from '../controller/Eventos.controller.js';

const router = express.Router();

// Ex: /eventos?cidade=salvador
router.get('/', getEventos);

export default router;


