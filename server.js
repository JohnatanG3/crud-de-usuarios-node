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
    try {
        const users = await prisma.user.findMany();
        
        response.status(200).json(users);  // Retorna os usuários com sucesso
    } catch (error) {
        response.status(500).json({error: "Erro ao listar usuários!"});  // Retorna erro se algo falhar
    }
});

// Rota para criar um novo usuário com Body Params
// Body Params são utilizados para enviar dados no corpo da requisição (geralmente em POST ou PUT).
// Exemplo: Enviar um JSON no corpo da requisição:
// {
//   "nome": "Joao",
//   "idade": 25
// }
app.post("/usuarios", async (request, response) => {
    try {
        // Valida se a idade é maior que 18 antes de criar o usuário
        if (request.body.age < 18) throw new Error("Only allowed users over 18 years old!");
        
        const user = await prisma.user.create({
            data: {
                email: request.body.email,
                age: request.body.age,
                name: request.body.name
            }
        });

        response.status(201).json(user);  // Retorna o usuário criado com sucesso
    } catch (error) {
        response.status(400).json({error: error.message});  // Retorna o erro caso haja
    } finally {
        console.log("Terminou Tudo!");  // Sempre será executado após a execução da função
    }
});

// Rota para editar usuários
app.put("/usuarios/:id", async (request, response) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: request.params.id,  // Pega o ID da URL
            },
            data: {
                email: request.body.email,
                age: request.body.age,
                name: request.body.name
            }
        });

        response.status(200).json(user);  // Retorna o usuário atualizado
    } catch (error) {
        response.status(400).json({error: "Erro ao atualizar usuário!"});  // Retorna erro se algo falhar
    }
});

// Rota para deletar usuários
app.delete("/usuarios/:id", async (request, response) => {
    try {
        await prisma.user.delete({
            where: {
                id: request.params.id,  // Pega o ID da URL
            }
        });

        response.status(200).json({mensagem: "Usuário Deletado com Sucesso!"});  // Retorna mensagem de sucesso
    } catch (error) {
        response.status(400).json({error: "Erro ao deletar usuário!"});  // Retorna erro se algo falhar
    }
});

// Inicia o servidor na porta 3000
// Acesse em: http://localhost:3000/
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});