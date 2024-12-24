/*
    CRUD:
    CREATE - OK
    READ - OK
    UPDATE - OK
    DELETE - OK
*/

import express from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express();

// Middleware para interpretar JSON no corpo da requisição (necessário para Body Params)
app.use(express.json()); 

// Rota para listar usuários com Query Params
// Query Params são utilizados para filtrar ou especificar informações.
// Exemplo: http://localhost:3000/usuarios?nome=Joao&idade=25
app.get("/usuarios", async (request, response) => {
    const users = await prisma.user.findMany();
    
    response.status(200).json(users);
});

// Rota para criar um novo usuário com Body Params
// Body Params são utilizados para enviar dados no corpo da requisição (geralmente em POST ou PUT).
// Exemplo: Enviar um JSON no corpo da requisição:
// {
//   "nome": "Joao",
//   "idade": 25
// }
app.post("/usuarios", async (request, response) => {
    const user = await prisma.user.create({
        data:  {
            email: request.body.email,
            age: request.body.age,
            name: request.body.name
        }
    })
    
    response.status(201).json(user);
});

// Rota para editar usuários
app.put("/usuarios/:id", async (request, response) => {
    request.params.id;
    const user = await prisma.user.update({
        where: {
            id: request.params.id,
        },
        data:  {
            email: request.body.email,
            age: request.body.age,
            name: request.body.name
        }
    })
    
    response.status(200).json(user);
});

// Rota para deletar usuários
app.delete("/usuarios/:id", async (request, response) => {
    await prisma.user.delete({
        where: {
            id: request.params.id,
        }
    });

    response.status(200).json({mensagem: "Usuário Deletado com Sucesso!"});
});

// Inicia o servidor na porta 3000
// Acesse em: http://localhost:3000/
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

// johnatang3
// johnatan1303
// mongodb+srv://johnatang3:<db_password>@users.jhywwlg.mongodb.net/?retryWrites=true&w=majority&appName=Users