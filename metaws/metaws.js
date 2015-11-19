/**
 * metaws.js
 *
 * @version 0.0.1 - alfa
 *
 * DESCRIPTION:
 * Serviço WEB do aplicativo Meta.
 * Webserver and a Oracle on separate instances on TJCE.
 * Uses the Express and Oracledb node packages.
 *
 *
 * @metatjce
 * meta.tjce.jus.br
 * dashboard.tjce.jus.br
 *
 * @author Fabio Lenine Vilela da Silva
 * (C) 2015 Fortaleza - Brasil
 */

var http                = require('http');
var https               = require('https');
var express             = require('express');
var MemoryStore         = require('connect').session;
var oracledb            = require('oracledb');
var vhost		= require('vhost');

var app                 = express();

//acrescentar aqui o controle da pagina Landing

http.createServer(app).listen(80);

var metadetalhes  = require('./modulos/metadetalhes.js')();

// set up ejs for templating
app.set('view engine','ejs');
app.use(express.static('../landingpage'));
app.use(express.static('../dashboard'));

// =================================================================================
// routes
// ================================================================================
require('./modulos/routermeta.js')(app, metadetalhes);			  		  // load our routes the landingpage

//
// Express route to handle errors
//
app.use(function(err, req, res, next){
  // we may use properties of the error object
  // here and next(err) appropriately, or if
  // we possibly recovered from the error, simply next().
  res.status(err.status || 500);
  res.render('500', { error: err });
});

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Não encontrado. ;-(' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Não encontrado. ;-(');
});

// ------------------------------------------------------------------------
// Start Express Webserver
//
console.log('Iniciando o Web server Meta dashboard');
console.log('Webserver está escutando na port 80.');
