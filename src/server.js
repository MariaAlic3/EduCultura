import express from 'express';
import cors from 'cors';

import eventosRoutes  from './routes/eventos.routes.js';
import museusRoutes from './routes/museus.routes.js';
import personalidadesRoutes from './routes/personalidades.routes.js';
import universidadesRoutes from './routes/universidades.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Middleware para permitir CORS
const allowedOrigin = process.env.FRONTEND_URL || '*';

app.use(cors({
  origin: allowedOrigin,
}));

// Rotas
app.use('/eventos', eventosRoutes);
app.use('/museus', museusRoutes);
app.use('/personalidades', personalidadesRoutes);
app.use('/universidades', universidadesRoutes);

// Middleware de tratamento de erros (deve ser registrado por último)
app.use(errorHandler);

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`EduCultura API rodando em http://localhost:${PORT}`);
});
