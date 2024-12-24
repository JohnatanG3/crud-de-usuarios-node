# CRUD de Usuários com Node.js, Express e Prisma

Este repositório contém um projeto básico de CRUD (Create, Read, Update, Delete) para gerenciamento de usuários utilizando **Node.js**, **Express** e **Prisma ORM** com integração ao banco de dados **MongoDB**.

## 🚀 Funcionalidades
- **Criar usuários**: Adicionar novos usuários ao banco de dados.
- **Listar usuários**: Recuperar todos os usuários armazenados.
- **Atualizar usuários**: Editar informações de usuários existentes.
- **Deletar usuários**: Remover usuários do banco de dados.

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Plataforma para execução do JavaScript no servidor.
- **Express**: Framework para criar APIs RESTful.
- **Prisma**: ORM para manipulação do banco de dados.
- **MongoDB**: Banco de dados utilizado para persistência.

## 📁 Estrutura do Projeto
- **.env**: Contém as variáveis de ambiente (como a URL de conexão do banco de dados).
- **package.json**: Configurações do projeto, incluindo scripts e dependências.
- **server.js**: Arquivo principal que implementa as rotas e inicializa o servidor.

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   
2. Instale as dependências:
    ```
    npm install
    
3. Configure as variáveis de ambiente no arquivo .env:
   ```
   DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome_do_banco>?retryWrites=true&w=majority&appName=<app_name>"

## ▶️ Execução

  1. Inicie o servidor:
     ```
     npm run dev
  
  2. O servidor estará disponível em: http://localhost:3000

## 📖 Endpoints da API
  1. Listar Usuários
  GET /usuarios
  Descrição: Retorna todos os usuários.
  Exemplo de Resposta:

    [
    {
      "id": 1,
      "name": "João",
      "email": "joao@email.com",
      "age": 25
    }
    ]

  2. Criar Usuário
    POST /usuarios
    Descrição: Cria um novo usuário.

            {
              "name": "João",
              "email": "joao@email.com",
              "age": 25
          }
  3. Atualizar Usuário
    PUT /usuarios/:id
    Descrição: Atualiza um usuário existente.
    Body Exemplo:

            {
              "name": "João Silva",
              "email": "joaosilva@email.com",
              "age": 26
          }

  4. Deletar Usuário
    DELETE /usuarios/:id
    Descrição: Remove um usuário do banco de dados.

## 📝 Observações

Certifique-se de que o MongoDB está configurado corretamente.
Atualize o arquivo .env com suas credenciais antes de executar o projeto.

## 🛠️ Como Contribuir com o projeto

Se você quiser contribuir com este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Autor

Desenvolvido por [JohnatanG3](https://github.com/JohnatanG3).

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato comigo:

- **GitHub:** [JohnatanG3](https://github.com/JohnatanG3)
- **LinkedIn:** [Johnatan Vieira](https://www.linkedin.com/in/johnatan-vieira-a602542aa/)
- **E-mail:** johnatan.g3@protonmail.com
