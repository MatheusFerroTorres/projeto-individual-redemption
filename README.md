# 🃏 Red Dead Redemption — Blackjack Web App

> Aplicação web full-stack temática do jogo Red Dead Redemption 2, com sistema de cadastro/login de usuários, Blackjack jogável no navegador, ranking global e dashboard de estatísticas com gráficos.

---

## 🎮 Sobre o projeto

Projeto acadêmico individual desenvolvido durante a graduação na SPTech, com o objetivo de aplicar na prática os conceitos de desenvolvimento web full-stack: criação de API REST com Node.js, integração com banco de dados relacional MySQL e construção de interface frontend com HTML, CSS e JavaScript puro.

O tema escolhido foi Red Dead Redemption 2, com identidade visual inspirada no jogo — tipografia, paleta de cores e assets temáticos.

---

## 🖥️ Funcionalidades

- **Cadastro e login** de usuários com validação no backend
- **Blackjack jogável** no navegador (lógica completa em JS)
- **Persistência de pontuação** — vitórias, derrotas e empates salvos por usuário no banco
- **Ranking global** com todos os jogadores ordenados por vitórias
- **Dashboard** com gráficos de desempenho individual (gráfico de pizza e ranking)
- **Página Explorar** com conteúdo temático do universo RDR2

---

## 🏗️ Arquitetura

```
projeto-individual-redemption/
├── app.js                        # Entry point — Express + rotas + configuração de porta
├── package.json
├── .env.example                  # Template de variáveis de ambiente
├── src/
│   ├── controllers/
│   │   ├── usuarioController.js  # Lógica de autenticação e cadastro
│   │   └── blackjackController.js # Lógica de pontuação (upsert)
│   ├── models/
│   │   ├── usuarioModel.js       # Queries SQL de usuário
│   │   └── blackjackModel.js     # Queries SQL de partidas
│   ├── routes/
│   │   ├── usuarios.js           # POST /usuarios/cadastrar, /autenticar
│   │   └── blackjack.js          # POST /blackjack/pontuar-ou-atualizar, GET /blackjack/
│   └── database/
│       ├── config.js             # Conexão MySQL com suporte a dois ambientes
│       └── script-tabelas.sql    # DDL completo do banco de dados
└── public/
    ├── HOME/                     # Página inicial
    ├── LOGIN/                    # Tela de login
    ├── CADASTRO/                 # Formulário de cadastro
    ├── DASHBOARD/                # Estatísticas e gráficos do usuário
    ├── EXPLORAR/                 # Conteúdo temático RDR2
    ├── REGRAS/                   # Regras do Blackjack
    ├── BLACKJACK/                # Jogo em si
    └── Banco/                    # Modelagem do banco (.mwb + imagem)
```

---

## 🔌 Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/usuarios/cadastrar` | Cadastra novo usuário |
| `POST` | `/usuarios/autenticar` | Autentica usuário (login) |
| `POST` | `/blackjack/pontuar-ou-atualizar` | Salva ou atualiza pontuação |
| `GET` | `/blackjack/` | Retorna ranking global |
| `GET` | `/blackjack/resultado/:idUsuario` | Retorna estatísticas do usuário |

---

## 🗄️ Banco de dados

Banco MySQL com 3 tabelas:

```sql
usuario (idUsuario, nome, email, senha, telefone)
blackjack (idPartida, qtdPartidasGanhas, qtdPartidasPerdidas, qtdPartidasEmpatadas, qtdPartidasTotal, fkUsuario)
conquistas (idConquista, nome, descricao, fkUsuario)
```

O script DDL completo está em `src/database/script-tabelas.sql`.

A modelagem visual está disponível em `public/Banco/Modelagem-ProjetoIndividual.mwb` (MySQL Workbench).

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Node.js 18+
- MySQL Server rodando localmente
- MySQL Workbench (opcional, para visualizar a modelagem)

### Instalação

```bash
git clone https://github.com/seu-usuario/projeto-individual-redemption.git
cd projeto-individual-redemption
npm install
```

### Configuração do banco

1. Abra o MySQL e execute o script:
```bash
mysql -u root -p < src/database/script-tabelas.sql
```

2. Copie o `.env.example` e preencha com suas credenciais:
```bash
cp .env.example .env
# Edite .env com host, usuário e senha do seu MySQL
```

### Executando

```bash
# Modo desenvolvimento (com nodemon)
npm run dev

# Produção
npm start
```

Acesse: `http://localhost:3333/HOME/HOME.html`

---

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Backend | Node.js + Express |
| Banco de dados | MySQL via `mysql2` |
| Frontend | HTML5 + CSS3 + JavaScript puro |
| Ambiente | `dotenv` (suporte a dev/prod) |
| Hot reload | `nodemon` |

---

## 📚 Contexto acadêmico

Projeto desenvolvido individualmente como avaliação de disciplina de Desenvolvimento Web, com foco em:

- Criação de API REST com arquitetura MVC (Model-View-Controller)
- Integração frontend-backend via `fetch` / `XMLHttpRequest`
- Modelagem e manipulação de banco de dados relacional
- Separação de ambientes de desenvolvimento e produção

---

## 📄 Licença

MIT
