
   <h1 align="center">Link shortener - Encurtador de links</h1>

## 📖 Descrição
Este projeto permite a criação de links encurtados e o redirecionamento de URLs de maneira eficiente. É ideal para aplicações web, relatórios analíticos ou qualquer cenário que necessite de links curtos e rastreáveis.

## Principais Funcionalidades
- Criação de URLs encurtadas.
- Redirecionamento de links.
- Análise de acessos (ex.: cliques).
- API REST para integração com outros serviços.


## ⚙️ Pré-requisitos
Antes de começar, você precisará ter os seguintes itens instalados na sua máquina:

- Node.js (v16 ou superior)
- npm ou yarn
- Banco de dados (ex.: PostgreSQL, MySQL ou MongoDB)

## Instalação
Clone este repositório:

bash
Copiar código
git clone https://github.com/Romilton-Costa/url-shortener/
cd link-shortener
Instale as dependências:

```bash
npm install
```
## 🔧 Configuração
Renomeie o arquivo .env.example para .env:

bash
Copiar código
mv .env.example .env
Configure as variáveis de ambiente no arquivo .env:

env
Copiar código
DATABASE_URL=postgresql://user:password@localhost:5432/link_shortener
PORT=3000
Execute as migrações do banco de dados (se aplicável):

bash
Copiar código
npm run migration:run
🚀 Uso
Inicie o servidor:

bash
Copiar código
npm run start
Acesse a aplicação em http://localhost:3000.

Utilize a documentação da API (ex.: Swagger) em http://localhost:3000/api.

## 📂 Estrutura do Projeto
plaintext
Copiar código
src/
├── app.module.ts        # Módulo principal
├── link/                # Módulo de encurtamento de links
│   ├── link.controller.ts
│   ├── link.service.ts
│   ├── link.entity.ts
├── common/              # Módulos e utilitários compartilhados
└── ...
## 📖 Rotas da API
POST /links
Cria um novo link encurtado.

Request Body:

json
Copiar código
{
  "url": "https://example.com"
}
Response:

json
Copiar código
{
  "shortUrl": "http://localhost:3000/abc123"
}
GET /:shortUrl
Redireciona para a URL original.

Exemplo: http://localhost:3000/abc123 → https://example.com
## 🛠️ Tecnologias Utilizadas
NestJS
TypeScript
Banco de Dados (ex.: PostgreSQL ou MongoDB)
Swagger para documentação de APIs
