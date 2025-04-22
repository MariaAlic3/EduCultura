import { v4 as uuidv4 } from 'uuid';

const eventos = [
    { id: uuidv4(), cidade: "São Paulo", evento: "Sarau das Pretas", gratuito: true },
    { id: uuidv4(), cidade: "Salvador", evento: "Feira de Cultura Afro", gratuito: true },
    { id: uuidv4(), cidade: "Recife", evento: "Festival de Maracatu", gratuito: true },
    { id: uuidv4(), cidade: "Belém", evento: "Encontro de Culturas Amazônicas", gratuito: true },
    { id: uuidv4(), cidade: "Porto Alegre", evento: "Festival de Arte Negra", gratuito: true },
    { id: uuidv4(), cidade: "Belo Horizonte", evento: "Congresso de Cultura Afro-Brasileira", gratuito: true }
];

export default eventos;
