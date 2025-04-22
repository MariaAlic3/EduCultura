import museus from '../model/Museus.model.js';

export const getMuseumPorCidade = (req, res, next) => {
try {
    const cidade = req.query.cidade?.toLowerCase();

    if (!cidade) {
        return res.status(400).json({ mensagem: "Parâmetro 'cidade' é obrigatório. Ex: /museus?cidade=sp" });
    }

    const resultados = museus.filter(
        m => m.cidade.toLowerCase() === cidade && m.gratuito
    );

    if (resultados.length === 0) {
        return res.status(400).json({ mensagem: "Nenhum museu gratuito encontrado nessa cidade!"});
    }

    res.json(resultados);
} catch (err) {
    next(err);
}
};