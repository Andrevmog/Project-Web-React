"use strict";

var porta = 3003;

var express = require('express');

var app = express();
app.get('/produtos', function (req, res, next) {
  console.log('Middleware 1...');
  next();
});
app.get('/produtos', function (req, res, next) {
  res.send({
    nome: 'Notebook',
    preco: 123.45
  }); //Converter para JSON
});
app.listen(porta, function () {
  console.log("Servidor executando na porta ".concat(porta, "."));
});