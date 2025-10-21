# 🛍️ Product Service – API de Catálogo de Produtos (NestJS)
### (Sem Bugs)

## 👨‍💻 Desenvolvido por

- **Daniel Goes**  
- **Gulitti**  
- **Gabriel Espadoni**  
- **Antony**

---

## 📖 Descrição do Projeto


Este projeto faz parte do **Tutorial 2 – Guia de Desenvolvimento para a Equipe B**, com o objetivo de construir uma **API REST** que gerencia um **catálogo de produtos** utilizando o **framework NestJS**.

A API permite:
- Listar todos os produtos disponíveis no catálogo.  
- Buscar informações detalhadas de um produto específico pelo seu ID.  

O servidor roda na **porta 3002**, e os dados são simulados diretamente em memória (não há banco de dados real).

---

## 🧩 Estrutura do Projeto

```bash
product-service/
├── src/
│   ├── products/
│   │   ├── products.controller.ts  # Controlador: define os endpoints HTTP
│   │   ├── products.service.ts     # Serviço: contém a lógica e dados simulados
│   │   └── products.module.ts      # Módulo de produtos
│   ├── app.module.ts               # Módulo raiz da aplicação
│   └── main.ts                     # Ponto de entrada (inicia o servidor)
├── package.json
├── tsconfig.json
└── README.md
```
---

## ⚙️ Instalação e Execução

### 1️⃣ Pré-requisitos
Certifique-se de ter instalado:  
- **Node.js** (versão 18 ou superior)  
- **npm**  
- **Nest CLI** (caso ainda não tenha, instale com o comando abaixo):

```bash
npm install -g @nestjs/cli
```

###2️⃣ Criação do Projeto
```bash

- **nest new product-service**
- **cd product-service**
```

### 3️⃣ Rodar o Servidor
```bash

- npm run start:dev
- Após iniciar, o servidor estará acessível em:
**👉 http://localhost:3002**

##🧪 Testando no Postman
- Abra o Postman (ou Insomnia) e teste os seguintes endpoints:

### 🔹 Listar todos os produtos
Método: *GET*
URL: "http://localhost:3002/products"
``` 
#### Retorno esperado (exemplo):

#json
[
  {
    "productId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "name": "NestJS Pro T-Shirt",
    "price": "99.9",
    "description": "A high-quality shirt for pro developers."
  },
  {
    "productId": "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
    "name": "TypeScript Mug",
    "price": "25.5",
    "description": "A mug that understands your types."
  }
]
### ⚠️ Observação: a resposta demora 5 segundos por causa de um bug de performance intencional.

##🔹 Buscar produto por ID

- Método: GET
-URL: http://localhost:3002/products/a1b2c3d4-e5f6-7890-1234-567890abcdef

*Retorno esperado (com bug lógico):*

json
{
  "productId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "name": "NestJS Pro T-Shirt",
  "price": "99.9",
  "description": "A high-quality shirt for pro developers."
}

#⚠️ Mesmo que você altere o ID, o endpoint sempre retorna o primeiro produto (Sem Bugs)
#🧠 Como a API Funciona
- O NestJS inicializa o AppModule, que importa o módulo de produtos (ProductsModule).

- O ProductsController define as rotas HTTP (ex: /products e /products/:id).

- O ProductsService contém a lógica da aplicação e os dados simulados.

##Quando uma requisição chega:

/products → o controller chama findAll() e retorna todos os produtos (com atraso de 5s).

/products/:id → o controller chama findOne(id) e retorna um produto (mas com o bug, sempre o primeiro).

# 🧰 Comandos Úteis
bash
Copiar código
### Rodar o servidor em modo de desenvolvimento
- npm run start:dev

### Compilar o código TypeScript para JavaScript
- npm run build

### Executar o servidor compilado
- *npm run start*

### 🚀 Conclusão
- Este projeto mostra como estruturar uma API simples com NestJS, utilizando módulos, serviços e controladores.
- Os bugs foram adicionados intencionalmente para fins de aprendizado sobre:

Contratos de tipos (TypeScript),

