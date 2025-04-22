import eventos from '../model/Eventos.model.js';

export const getEventos = (req, res, next) => {
  try {
    const cidade = req.query.cidade?.toLowerCase();

    if (!cidade) {
      return res.status(400).json({ mensagem: "Parâmetro 'cidade' é obrigatório. Use /eventos?cidade=nome" });
    }

    const resultados = eventos.filter(e =>
      e.cidade.toLowerCase() === cidade && e.gratuito
    );

    if (resultados.length === 0) {
      return res.status(404).json({ mensagem: "Nenhum evento gratuito encontrado nessa cidade." });
    }

    res.json(resultados);
  } catch (erro) {
    next(erro); // repassa para middleware global de erro
  }
};
