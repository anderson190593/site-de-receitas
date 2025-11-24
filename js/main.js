// js/main.js
// Importamos a lista de receitas diretamente. O navegador agora sabe de onde vem os dados.
import { receitas } from './receitas.js';

document.addEventListener('DOMContentLoaded', () => {
    const receitasContainer = document.getElementById('receitas-container');
    const searchInput = document.getElementById('search-input'); // Novo elemento de busca

    // Função Componente: Recebe dados e retorna HTML string
    // Adicionamos classes novas para o visual Glassmorphism
    const createRecipeCard = (receita) => {
        return `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card glass-card h-100">
                    <div class="card-img-wrapper">
                        <img src="${receita.imagem}" class="card-img-top" alt="${receita.nome}">
                    </div>
                    <div class="card-body text-white">
                        <span class="badge glass-badge mb-2">${receita.categoria || 'Geral'}</span>
                        <h5 class="card-title">${receita.nome}</h5>
                        
                        <div class="ingredientes-section mb-3">
                            <p class="card-subtitle text-light-50 mb-2"><small>Ingredientes:</small></p>
                            <div class="d-flex flex-wrap gap-1">
                                ${receita.ingredientes.map(ing => 
                                    `<span class="badge bg-dark bg-opacity-50 border border-secondary">${ing}</span>`
                                ).slice(0, 4).join('')}
                                ${receita.ingredientes.length > 4 ? '<span class="badge bg-transparent text-muted">...</span>' : ''}
                            </div>
                        </div>
                        
                        <button class="btn btn-outline-light w-100 btn-sm mt-auto" type="button" data-bs-toggle="collapse" data-bs-target="#desc-${receita.id}">
                            Ver Preparo
                        </button>
                        <div class="collapse mt-3" id="desc-${receita.id}">
                             <p class="card-text small border-top border-secondary pt-2">${receita.instrucoes}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Função de Renderização com estado (filtro)
    const renderReceitas = (termoBusca = '') => {
        const termo = termoBusca.toLowerCase();
        
        // Filter: Conceito chave de programação funcional
        const receitasFiltradas = receitas.filter(receita => 
            receita.nome.toLowerCase().includes(termo) || 
            receita.ingredientes.some(ing => ing.toLowerCase().includes(termo))
        );

        if (receitasFiltradas.length === 0) {
            receitasContainer.innerHTML = `
                <div class="col-12 text-center text-white mt-5">
                    <h3>🔍 Nenhuma receita encontrada</h3>
                    <p>Tente buscar por outro ingrediente.</p>
                </div>`;
            return;
        }

        receitasContainer.innerHTML = receitasFiltradas.map(createRecipeCard).join('');
    };

    // Event Listener para a busca em tempo real ("Live Search")
    searchInput.addEventListener('input', (e) => {
        renderReceitas(e.target.value);
    });

    // Render inicial
    renderReceitas();
});