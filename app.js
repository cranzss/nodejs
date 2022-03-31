const express = require('express');
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const port = 8000;

//habilitar servidor
app.listen(port,()=>{
    console.log("Projeto executando na porta " + port);
});

app.get('/aluno', (req, res) =>{
    res.send("{message:aluno encontrado}");
});

//recurso de request.query
app.get('/aluno/filtros', (req, res) =>{
    let source = req.query;
    let ret = "Dados solicitados: " + source.nome + " " + source.sobrenome;
    res.send("{message:" + ret + "}");
});

//recurso de request.param
app.get('/aluno/pesquisa/:valor',(req,res)=>{
    let dado = req.params.valor;
    let ret = "Dados solicitados: " + dado;
    res.send("{message:" + ret + "}");
});

//recurso de request.body
app.post('/aluno', (req, res)=>{
    let dados = req.body;
    let ret = "\nDados enviados\nNome: " + dados.nome;
    ret+="\n Sobrenome: " + dados.sobrenome;
    ret+="\nIdade: " + dados.idade;
    res.send("{message:"+ret+"}");
});