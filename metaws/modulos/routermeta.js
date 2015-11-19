// routermeta.js
module.exports = function(app, metadetalhes)
{

app.get('/', function(req, res) {
	app.set('views','../landingpage');
	res.render('index.ejs');
});

app.get('/dashboard', function(req, res) {
	app.set('views','../dashboard');
	res.render('dashboard.ejs');
});

//------------------------------------------------
//-- Serviços do Dashboard -----------------------
//------------------------------------------------


app.get('/ping', function(req, res) {
	res.status(200).send("pong!");
});

};
