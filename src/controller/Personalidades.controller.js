import personalidades from "../model/Personalidades.model.js";
    
export const getPersonalidade = (req, res, next) => {
  try {
    const nome = req.query.nome?.toLowerCase();

    if (!nome) {
      return res.status(400).json({ mensagem: "Parâmetro 'nome' é obrigatório. Ex: /personalidades?nome=zumbi" });
    }

    const resultado = personalidades.find(p =>
      p.nome.toLowerCase().includes(nome)
    );

    if (!resultado) {
      return res.status(404).json({ mensagem: "Personalidade não encontrada." });
    }

    res.json(resultado);
  } catch (err) {
    next(err);
  }
};
