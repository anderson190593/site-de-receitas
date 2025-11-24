// js/receitas.js
// Adicionamos 'export' para permitir que outros arquivos importem esses dados.
// Isso encapsula os dados e previne conflitos globais.

export const receitas = [
    {
        id: 1,
        nome: "Bolo de Cenoura",
        ingredientes: ["Farinha", "Cenoura", "Ovo", "Açúcar", "Óleo", "Fermento"],
        instrucoes: "Misture os ingredientes líquidos, adicione os secos e leve ao forno por 40 minutos.",
        imagem: "images/bolo-de-cenoura.png",
        categoria: "Sobremesa" // Adicionei categoria para futuro uso
    },
    {
        id: 2,
        nome: "Feijoada Completa",
        ingredientes: ["Feijão preto", "Carne seca", "Costela de porco", "Linguiça", "Alho", "Cebola"],
        instrucoes: "Cozinhe o feijão com as carnes e tempere a gosto. Sirva com couve e laranja.",
        imagem: "images/feijoada.png",
        categoria: "Prato Principal"
    },
    {
        id: 3,
        nome: "Strogonoff de Frango",
        ingredientes: ["Peito de frango", "Creme de leite", "Catchup", "Mostarda", "Champignon", "Cebola"],
        instrucoes: "Refogue o frango, adicione os temperos e finalize com o creme de leite. Sirva com arroz branco.",
        imagem: "images/strogonoff.png",
        categoria: "Prato Principal"
    },
    {
        id: 4,
        nome: "Pão de Queijo",
        ingredientes: ["Polvilho azedo", "Queijo minas", "Ovo", "Leite", "Óleo", "Sal"],
        instrucoes: "Misture todos os ingredientes até obter uma massa homogênea. Modele e asse.",
        imagem: "images/pao-de-queijo.png",
        categoria: "Lanche"
    }
];