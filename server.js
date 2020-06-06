// Códigos de configuração de um Servidor - ANTES DE NUNJUCKS

const express = require("express")
const server = express()

// Configurar pasta Publica (para nao perder o caminho do css e js)
server.use(express.static("public"))

// Configurar caminhos da minha aplicação
// req = Requisição    res = Resposta
server.get("/", (req, res) => {
     res.sendFile(__dirname + "/views/index.html")
}) 

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
}) 

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
}) 

// Ligar o servidor
server.listen(3000)
