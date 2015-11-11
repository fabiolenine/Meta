// routermeta.js
module.exports = function(app, metadetalhes)
{

app.get('/', function(req, res) {
//	app.use(express.static('../landingpage'));
	app.set('views','../landingpage/');
	res.render('index.ejs');
});

app.get('/dashboard', function(req, res) {
	app.set('views','../dashboard/');
//	app.use(express.static('../dashboard'));
	res.render('dashboard.ejs');
});

app.get('/ping', function(req, res) {
	res.status(200).send("pong!");
});

};
