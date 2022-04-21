# Personal Finance

***

Projeto criado para gerenciamento de finanças pessoais.

#### Como rodar o projeto?

1. Clonar o projeto: `git clone https://github.com/Deyvs/personal-finance.git`

2. Instalar as dependências através do comando: `npm install`

3. Subir o banco de dados, com o coamndo: `npm run up-mongo`

4. Copiar as `variáveis de ambiente` para `.env` e configurrar as envs

5. Rodar a aplicação com o comando: `npm start`

####Variáveis de ambiente

>PORT=8001 // Porta em que a aplicação vai rodar
DB_NAME=personal_finance // nome do banco
DB_HOST=localhost // host do banco
DB_PORT=27017 // porta do banco
DB_PASS=123456 // senha de acesso ao banco
DB_USER=admin // usuário do banco

- É necessário que exista  um usuário com perfil de leitura e escrita configurado no mongo.

### Endpoints

**GET/finances**

**HTTP Status Code: :green_heart: 200 OK**

**Response Body**

    {
        "_id": "3bd35a93-ff2e-412b-b6a3-de647eb1053c",
        "description": "miband 6",
        "price": 400,
        "category": "personal",
        "paymentType": "credit card",
        "operationType": "debit",
        "createdAt": "2022-04-14T23:42:28.126Z"
    }

***

**POST/finances**

**Body:**

    {  
        "description": "miband 6",
        "price": 400.00,
        "category": "personal",
        "paymentType": "credit card",
        "operationType": "debit"
    }

**HTTP Status Code: :green_heart: 201 Created**

**Response Body:**

    {
        "_id": "3bd35a93-ff2e-412b-b6a3-de647eb1053c",
        "description": "miband 6",
        "price": 400,
        "category": "personal",
        "paymentType": "credit card",
        "operationType": "debit",
        "createdAt": "2022-04-14T23:42:28.126Z",
        "updatedAt": "2022-04-14T23:42:28.126Z",
        "__v": 0
    }

**:broken_heart: 500 Internal Server Error**

**Response Body:**

    {
        "status": 500,
        "message": "error message"
    }

