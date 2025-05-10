# Info Tech - Projeto

Este projeto é composto por duas aplicações:

- **Backend**: NestJS com MongoDB
- **Frontend**: Angular 19 com Angular Material e suporte a SSR

---

## Requisitos

- Node.js v22.14.0
- Angular CLI v19.2.1
- MongoDB rodando localmente na porta 27017

---

## Clonando o projeto

```bash
git clone https://github.com/josiasOLG/info-tech.git
```

---

## Backend - `backend-info-tech`

### Instalação

```bash
cd backend-info-tech
npm install
```

### Configuração do ambiente

Crie um arquivo `.env` na raiz do backend com o seguinte conteúdo:

```env
MONGO_URI=mongodb://localhost:27017
MONGO_DB_NAME=info_tech
NODE_ENV=development
```

> ⚠️ **Importante:** atualize o `MONGO_URI` se estiver usando outro host/porta para seu MongoDB.

### Scripts disponíveis

```bash
npm run start:dev       # inicia o servidor em modo desenvolvimento
npm run build           # compila o projeto
npm run test            # executa os testes unitários
npm run lint            # corrige problemas de lint com ESLint + Prettier
npm run generate        # executa o gerador de código customizado com Plop
```

### Rodando o servidor

```bash
npm run start:dev
```

- API disponível em: [http://localhost:3000](http://localhost:3000)
- Swagger (documentação) em: [http://localhost:3000/docs](http://localhost:3000/docs)

---

## Frontend - `frontend-info-tech`

### Instalação

```bash
cd frontend-info-tech
npm install
```

### Rodando o frontend

```bash
npm start
```

- Aplicação Angular disponível em: [http://localhost:4200](http://localhost:4200)

### Scripts adicionais

```bash
npm run build                         # build de produção
npm run watch                         # build contínuo para desenvolvimento
npm run test                          # executa os testes unitários com Jest
npm run serve:ssr:frontend-info-tech  # roda com SSR (Server Side Rendering)
```

---

## Observações

- O backend usa **NestJS v11**, com suporte a **Swagger**, **Jest**, **ESLint** e gerador de código com `plop`.
- O frontend usa **Angular v19.2.15**, **Angular Material**, **PrimeFlex**, suporte a **SSR** e **Jest** para testes.
- O banco MongoDB deve estar disponível em `mongodb://localhost:27017`.

---
