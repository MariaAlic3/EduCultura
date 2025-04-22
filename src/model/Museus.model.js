import { v4 as uuidv4 } from 'uuid';

const museus = [
    { id: uuidv4(), cidade: "São Paulo", nome: "Museu Afro Brasil", gratuito: true},
    { id: uuidv4(), cidade: "Salvador", nome: "Casa do Benin", gratuito: true},
    { id: uuidv4(), cidade: "Belo Horizonte", nome: "Museu das Minas e do Metal", gratuito: false},
    { id: uuidv4(), cidade: "Rio de Janeiro", nome: "Museu de Arte do Rio (MAR)", gratuito: true },
    { id: uuidv4(), cidade: "Olinda", nome: "Casa dos Bonecos Gigantes", gratuito: true }
];

export default museus;