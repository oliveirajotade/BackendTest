const express = require('express');
const arquivo = require('./books.json');

const app = express();

app.listen(3000, () => {
    console.log(" servidor ok localhost porta 3000")
});

app.get("/", (req, res) => {
    res.send(arquivo)
});

app.get("/livro/:id", (req, res) => {
    const livro = arquivo.find(livr => livr.id === parseInt(req.params.id));
    res.send(livro);
});

app.get("/pesquisa", (req, res) => {
    livro = arquivo.find(livr => livr.name === req.query.name)
    res.send(livro);
});

app.get("/pesquisa/author", (req, res) => {
    let livro1 = arquivo.find(livr => livr.specifications.Author === req.query.name)
    res.send(livro1);
});