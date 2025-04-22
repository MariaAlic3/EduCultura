import { v4 as uuidv4 } from 'uuid';

const personalidades = [
    { id: uuidv4(), nome: "Zumbi dos Palmares", descicao: "Líder do Quilombo dos Palmares e símbolo de resistencia negra."},
    { id: uuidv4(), nome: "Dandara", descricao: "Guerreira quilombola, companheira de Zumbi, lutou contra a escravidão."},
    { id: uuidv4(), nome: "Marielle Franco", descricao: "Vereadora, ativista dos direitos humanos e símbolo da luta contra o racismo e da vioolêcia policial."},
    { id: uuidv4(), nome: "Sueli Carneiro", descricao: "Filósofa e ativista do movimento negro, fundadora do Geledés." },
    { id: uuidv4(), nome: "Cacique Raoni", descricao: "Líder indígena Kayapó, defensor da floresta e dos direitos indígenas."}
];

export default personalidades; 
