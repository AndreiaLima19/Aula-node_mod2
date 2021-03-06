const express = require("express");  //importando o express
const path = require("path");  // importando o path
const app = express();  // definindo meu app como um express
//const port = 3000;  //set porta na 3000
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");  //set engine para trabalhar com o EJS

app.use(express.static(path.join(__dirname, "public")));  //set public como pasta raiz de arquivos estaticos como imgs e css
app.use(express.urlencoded());

let message = "";

app.get("/", function (req, res){ // .get para tratar as requisicoes tipo get e a rota solicitada
    res.render("index", { titulo: "ola bluemer 123" });  // render para renderizar o arquivo EJS dentro da views por padrao
});

app.get("/pagina", function (req, res){
    res.render("pagina", { titulo: "pagina 2 123" });
});

app.get("/teste", function (req, res){
    res.render("../views/ejs/pagina2", { titulo: "pagina modificada" })
});

app.get("/formulario", function (req, res){
    res.render("formulario");
});

app.get("/recebeform", function (req, res){  //só p mostrar o get
    const { nome, email, senha } = req.query;
    res.send({ nome: nome, email: email, senha: senha});
});

// app.post("/recebeform", function (req, res){
//     const { nome, email, senha } = req.body;
//     res.send({ nome: nome, email: email, senha: senha});
// });

app.post("/recebeform", function (req, res){
    const { nome, email, senha, turma } = req.body;
    //const site = {titulo: "Formulário 2 - Resultado",nome: nome, email: email, senha: senha,turma:turma};
    const site = { titulo: "Formulário 2 - Resultado", nome: nome, email: email, senha: senha, turma:turma, message: `Usuario ${nome} cadastrado com sucesso`}; // construindo JSON


    setTimeout(() => {
        site.message = ""
    }, 1000);
    
    res.render("formulario2",site);
});

// Prof aula 8
// app.post("/recebeform", function (req, res){
//     const { nome, email, senha } = req.body; // recuperando via HTTP POST
//     const site = { titulo: "pagina de resultado", nome: nome, email: email, senha: senha, message: `Usuario ${nome} cadastrado com sucesso`}; // construindo JSON

//     setTimeout(() => {
//         site.message = ""
//     }, 1000);

//     res.render("resultado", site); // renderizando e usando o json para exibir infos na tela
// });

// app.post
// app.put
// app.delete
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`)); // faz o servidor escutar, passando a porta onde o servico vai ficar ativo