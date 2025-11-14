# 🍳 Projeto: Livro de Receitas Dinâmico

![Preview do Site de Receitas](preview.gif)

Este projeto é um livro de receitas digital e dinâmico, desenvolvido em JavaScript puro, HTML5 e CSS3. O site carrega os dados das receitas a partir de um array de objetos em um arquivo JS separado e os renderiza dinamicamente na página, criando uma galeria de cards interativos.

---

### 🎯 Objetivo

Demonstrar a manipulação do DOM e a renderização de dados em JavaScript. O objetivo é simular uma aplicação front-end que consome uma "fonte de dados" (o array de objetos) e a utiliza para construir a interface do usuário (UI) de forma programática, uma habilidade essencial no desenvolvimento web moderno.

---

### 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES6+)
* **Tecnologias Web:** HTML5, CSS3 (com Google Fonts)
* **Framework/Biblioteca:** Bootstrap 5 (para o grid responsivo e estilo base dos cards)
* **Ambiente:** Navegador Web (Chrome, Firefox, etc.)

---

### 🧱 Estrutura do Código

O projeto é modularizado para separar dados, lógica e apresentação:

| Arquivo | Propósito Principal |
| :--- | :--- |
| `index.html` | Estrutura principal e container (`#receitas-container`). |
| `receitas.js` | **Fonte de Dados:** Contém o array `receitas` de objetos. |
| `main.js` | **Lógica da Aplicação:** Contém as funções para renderizar o DOM. |
| `style.css` | Estilização personalizada (fontes, cores, efeitos de hover). |
| `main.js` » `createRecipeCard(receita)` | Função "template" que retorna o HTML de um único card. |
| `main.js` » `renderReceitas()` | Função que percorre o array de dados e insere o HTML na página. |

---

### 📦 Estrutura dos Dados

* **Array de Objetos – Receitas:**
    O núcleo do projeto é um array de objetos JavaScript armazenado em `receitas.js`. Cada objeto representa uma única receita e segue uma estrutura definida com chaves como:
    * `id` (Number)
    * `nome` (String)
    * `ingredientes` (Array de Strings)
    * `instrucoes` (String)
    * `imagem` (String - caminho do arquivo)

---

### 🔍 Funcionalidades

* **Renderização Dinâmica:** As receitas não estão fixas no HTML; elas são geradas pelo JavaScript no momento em que a página carrega.
* **Layout Responsivo:** Utiliza o grid do Bootstrap para que os cards se ajustem a qualquer tamanho de tela.
* **Design Personalizado:** Aplica fontes do Google Fonts e efeitos de `hover` para uma interface elegante, indo além do visual padrão do Bootstrap.
* **Código Modular:** Separação clara entre os dados (`receitas.js`) e a lógica de renderização (`main.js`).

---

### 🧪 Como Executar

Este é um projeto de front-end estático.

1.  Clone o repositório (ou tenha a pasta do projeto em sua máquina).
2.  Abra o arquivo `index.html` no seu navegador de preferência.

---

### 📚 Aprendizado

Este projeto foi crucial para solidificar meu entendimento de como os dados e a visualização se conectam no front-end:

* **Manipulação de Arrays de Objetos:** Aprofundei meu conhecimento em como iterar sobre estruturas de dados complexas.
* **Renderização Dinâmica do DOM:** Aprendi a técnica de usar `innerHTML` com **Template Literals** (crases `` ` ``) para construir HTML de forma eficiente.
* **Métodos de Array:** Pratiquei o uso de `.map()` para transformar dados (o array de objetos) em um novo formato (um array de strings HTML) e `.join('')` para uni-los.
* **Modularização:** Entendi a importância de separar os dados da lógica, o que torna o código mais limpo, fácil de manter e de escalar (basta adicionar um novo objeto em `receitas.js` para uma nova receita aparecer).

---

📄 **Licença**
Este projeto está licenciado sob a MIT License.
