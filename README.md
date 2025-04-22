# 📘 API EduCultura

API RESTful desenvolvida para promover o acesso à educação, cultura e inclusão social no Brasil. Ela fornece dados sobre:

- Universidades com políticas afirmativas
- Eventos culturais gratuitos
- Personalidades negras e indígenas da história
- Museus e centros culturais públicos e gratuitos

Esta API é ideal para desenvolvedores que desejam criar aplicações voltadas para a inclusão social e cultural.

---

## 🚀 Endpoints Disponíveis

### 🎓 Universidades com Cotas

**`GET /universidades?cota={tipo}`**

 - Retorna uma lista de instituições que adotam políticas de cotas.

| Parâmetro | Tipo   | Obrigatório |  Exemplo             |
|-----------|--------|-------------|----------------------|
| `cota`    | string | sim         | `indígena`, `racial` |

🔍 Exemplo:

  GET /universidades?cota=indígena


📦 Resposta:
```json
[
  {
    "id": 2,
    "nome": "UFBA",
    "cotas": ["racial", "social", "indígena"]
  }
]



### 🧠 Personalidades Negras ou Indígenas
  **`GET /personalidades?nome={nome}`**

 - Busca uma personalidade histórica relevante (busca parcial ou completa).

|Parâmetro |  Tipo  | Obrigatório | Exemplo |
|----------|--------|-------------|---------|
| nome     |string  |    sim      |  zumbi  |

🔍 Exemplo:

   GET /personalidades?nome=zumbi

📦 Resposta:
```json
{
  "id": 1,
  "nome": "Zumbi dos Palmares",
  "descricao": "Líder do Quilombo dos Palmares e símbolo da resistência negra."
}



### 🖼️ Museus e Centros Culturais Gratuitos
    **`GET /museus?cidade={cidade}`**

 - Retorna centros culturais e museus gratuitos em uma cidade específica.

|Parâmetro |  Tipo  | Obrigatório |  Exemplo |
|----------|--------|-------------|----------|
|cidade    | string |     sim     | Salvador |  

🔍 Exemplo:

  GET /museus?cidade=salvador

📦 Resposta:
```json
[
  {
    "id": 2,
    "cidade": "Salvador",
    "nome": "Casa do Benin",
    "gratuito": true
  }
]



### 🎭 Eventos Culturais Gratuitos
  **`GET /eventos?cidade={cidade}`**

- Retorna eventos culturais gratuitos cadastrados em uma cidade.

| Parâmetro | Tipo   | Obrigatório | Exemplo |
|-----------|--------|-------------|---------|
| cidade    | string | sim         | Belém   |

🔍 Exemplo:

GET /eventos?cidade=belém

📦 Resposta de Sucesso:
```json
[
  {
    "id": 1,
    "cidade": "Belém",
    "evento": "Encontro de Culturas Amazônicas",
    "gratuito": true
  }
]



## 🧪 Testando a API
1. Execute npm install para instalar dependências

2. Inicie a API com:
 npm run dev

3. Acesse os endpoints via navegador, Insomnia ou Postman:
 Crie uma nova requisição com o método `GET` e a URL 
 `http://localhost:3000`

 Por exemplo:
 `http://localhost:3000/eventos?cidade=belém`.



## ⚙️ Tecnologias Utilizadas
  Node.js
  Express.js  
  ECMAScript Modules (import / export)
  Estrutura MVC
  Middleware de erro
  Dados simulados com JSON



📁 Estrutura de Pastas
 src/
 ├── controllers/    : Contem os controladores responsáveis pela lógica de negócio.
 ├── routes/         : Define as rotas da API.
 ├── model/          : Contem os dados simulados em formato JSON.
 ├── middleware/     : Contem middlewares personalizados, como tratamento de erros.
 server.js           : Arquivo de inicialização do servidor.
