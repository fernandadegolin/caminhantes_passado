// Códigos de configuração de um Servidor - DEPOIS DE NUNJUCKS

const express = require("express")
const server = express()

// Configurar pasta Publica (para nao perder o caminho do css e js)
server.use(express.static("public"))

// Usando Template engine
const nunjucks = require("nunjecks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// Configurar caminhos da minha aplicação
// req = Requisição    res = Resposta
server.get("/", (req, res) => {
    return res.render("index.html")
}) 

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
}) 

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
}) 

// Ligar o servidor
server.listen(3000)
