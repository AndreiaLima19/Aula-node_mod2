const express = require("express");  //importando o express
const path = require("path");  //importando o path
const app = express();
const port = 3000;

app.set("view engine", "ejs");  //set engine p trabalhar com o EJS

app.use(express.static(path.join(__dirname, "public")));  //set publi como pasta raiz de arquivos

app.get("/", (req, res) => {
    res.render("index", {titulo: "Olá Bluemers!!"}); // Nome do arquivo, o EJS já busca dentro da pasta views.
});

app.get("/pagina", (req, res) => {
    res.render("pagina",{titulo: "Página 2!!"});
});

app.get("/", function (req, res) {
    res.send("Hello bluemers");
});

app.get("/teste2", function (req, res) {
    res.send("esse é um teste2");
});

// app.post
// app.put
// app.delete

app.listen(port,() => console.log(`Servidor rodando em http://localhost:${port}`));