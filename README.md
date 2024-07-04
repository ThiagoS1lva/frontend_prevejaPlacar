# 📊 Projeto de Previsão de Pontos e Gerador de Heatmap para o Brasileirão 2024

Repositório do projeto de Previsão de Pontos e Gerador de Heatmap para o Brasileirão 2024! 🎉 Este projeto utiliza React.js para apresentar uma tabela de previsão de pontos dos times do Brasileirão e também permite a geração de heatmaps para partidas específicas.

## 📋 Visão Geral

Este projeto é dividido em duas principais funcionalidades:

1. **Previsão de Pontos**: Uma tabela que mostra a previsão de pontos dos times do Brasileirão 2024, com dados carregados de uma API.
2. **Gerador de Heatmap**: Uma ferramenta que permite selecionar os times da casa e visitante para gerar um heatmap da partida.

## 🚀 Funcionalidades

### Previsão de Pontos

- **Carregamento de Dados**: Os dados são carregados de uma API externa.
- **Exibição da Tabela**: Exibe uma tabela com os logos dos times, nomes e pontos previstos.
- **Estilos Dinâmicos**: Times na liderança são destacados em verde, e os últimos quatro times são destacados em vermelho.

### Gerador de Heatmap

- **Seleção de Times**: Permite a seleção dos times da casa e visitante a partir de uma lista de opções.
- **Geração de Heatmap**: Gera e exibe um heatmap da partida selecionada, chamando uma API externa.

## 📦 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/
├── src/
│   ├── Components/
│   │   └── SelecionarTime.js
|   |   └── Menu.jsx
|   |   └── Sobre.jsx
|   |   └── Tabela.jsx
│   ├── Styles/
│   │   ├── Tabela.module.css
│   │   └── Heatmap.module.css
|   |   └── menu.css
|   |   └── Sobre.module.css
│   ├── pages/
|   |   └── Heatmap.jsx
|   |   └── Home.jsx
│   ├── App.js
│   └── index.js
└── public/
    └── images/
        └── logos_dos_times.png
```

## 🛠️ Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção da interface do usuário.
- **CSS Modules**: Para estilização modular e escopo local.
- **Axios**: Para fazer requisições HTTP.
- **Fetch API**: Para carregar dados da API externa.

## 🚧 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. Clone este repositório:

```bash
git clone https://github.com/ThiagoS1lva/frontendprevejaplacar
cd frontendprevejaplacar
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

O aplicativo estará disponível em `http://localhost:3000`.

## 📚 Como Usar

### Previsão de Pontos

1. Acesse a página principal para visualizar a tabela de previsão de pontos.
2. A tabela será carregada automaticamente com os dados da API.

### Gerador de Heatmap

1. Acesse a página de geração de heatmap.
2. Selecione os times da casa e visitante.
3. Clique no botão "Gerar Heatmap" para visualizar o heatmap da partida.
---

Feito com ❤️ por [Thiago Oliveira](https://github.com/ThiagoS1lva).
