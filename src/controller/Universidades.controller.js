import universidades from '../model/Universidade.model.js';

export const getUniversidades = (req, res, next) => {
  try {
    const tipoCota = req.query.cota?.toLowerCase();

    if (!tipoCota) {
      return res.status(400).json({ mensagem: "Parâmetro 'cota' é obrigatório. Ex: /universidades?cota=racial" });
    }

    const resultado = universidades.filter(u =>
      u.cotas.map(c => c.toLowerCase()).includes(tipoCota)
    );

    if (resultado.length === 0) {
      return res.status(404).json({ mensagem: "Nenhuma universidade encontrada com essa política de cota." });
    }

    res.json(resultado);
  } catch (err) {
    next(err);
  }
};
