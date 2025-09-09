document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o container onde as receitas serão exibidas
    const receitasContainer = document.getElementById('receitas-container');

    // Função para criar o HTML de um card de receita
    const createRecipeCard = (receita) => {
        return `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card shadow-sm h-100">
                    <img src="${receita.imagem}" class="card-img-top" alt="Imagem da receita de ${receita.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${receita.nome}</h5>
                        <p class="card-text text-muted">Ingredientes principais:</p>
                        <ul class="list-unstyled">
                            ${receita.ingredientes.map(ingrediente => `<li><i class="bi bi-dot"></i> ${ingrediente}</li>`).join('')}
                        </ul>
                        <p class="card-text"><strong>Modo de preparo:</strong> ${receita.instrucoes}</p>
                    </div>
                </div>
            </div>
        `;
    };

    // Função para renderizar todas as receitas
    const renderReceitas = () => {
        // Mapeia o array de receitas para um array de strings HTML
        const receitasHtml = receitas.map(receita => createRecipeCard(receita)).join('');
        
        // Insere o HTML gerado no container
        receitasContainer.innerHTML = receitasHtml;
    };

    // Chama a função para renderizar as receitas quando a página carregar
    renderReceitas();

});