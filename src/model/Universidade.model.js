import { v4 as uuidv4 } from 'uuid';

const universidades = [
    { id: uuidv4(), nome: "USP", cotas: ["Racial", "Social"] },
    { id: uuidv4(), nome: "UFRJ", cotas: ["Racial", "Social", "Indígena"] },
    { id: uuidv4(), nome: "UFBA", cotas: ["racial", "social", "indígena"] },
    { id: uuidv4(), nome: "UFMG", cotas: ["social", "indígena"] },
    { id: uuidv4(), nome: "UFSC", cotas: ["racial", "social"] },
    { id: uuidv4(), nome: "UFRGS", cotas: ["racial", "social"] },
    { id: uuidv4(), nome: "UnB", cotas: ["racial", "indígena"] }
   
];

export default universidades;
