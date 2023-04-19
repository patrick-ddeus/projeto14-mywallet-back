# MyWallet
Este é o backend para o projeto de uma carteira virtual. O sistema permite que os usuários consultem seus saldos, realizem depósitos e saques, bem como verifiquem seu histórico de transações. Há também um controle de acesso com autenticação usando tokens UUID e hash de senha com bcrypt.

## Tecnologias Utilizadas
- Node.js
- Express
- MongoDB
- Bcrypt
- UUID

## Funcionalidades
O backend do myWallet suporta as seguintes funcionalidades:

- Autenticação de usuário com tokens UUID
- Registro de novos usuários
- Verificação de saldo de conta bancária
- Realização de depósito em conta bancária
- Realização de saque em conta bancária
- Verificação de histórico de transações bancárias

## Instalação
Para instalar o backend do myWallet, siga os seguintes passos:

1. Clone este repositório
2. Instale as dependências do projeto utilizando o gerenciador de pacotes de sua preferência (npm ou yarn)
```bash
npm install
```
```bash
yarn install
```
3. Crie um arquivo .env na raiz do projeto, e adicione as seguintes variáveis de ambiente:
```bash
PORT=<porta do servidor express>
DATABASE_URL=<URL do banco de dados mongoDB>
```
4. Inicie o servidor
```bash
npm start
```
```bash
yarn start
```

## Endpoints
O backend do myWallet expõe os seguintes endpoints:

- `/api/auth/register` (POST) - Registra um novo usuário
- `/api/auth/login` (POST) - Realiza a autenticação do usuário e retorna um token UUID
- `/api/bank/transactions/deposit` (POST) - Realiza um depósito na conta bancária do usuário logado
- `/apibank/transactions/withdraw` (POST) - Realiza um saque na conta bancária do usuário logado
- `/api/bank/transactions` (GET) - Retorna o histórico de transações bancárias da conta bancária do usuário logado