//routesir.js
module.exports = function(app, MetaDetalhes) 
{
    app.set('views', '../dashboard');
    
// =====================================
// HOME PAGE (with login links) ========
// =====================================
  
// =====================================
// Lading Page =========================
// =====================================
// show the login form  
    app.get('/', function(req, res) {
        res.render('index.ejs', {   //isAuthenticated: false,
                                    message: req.flash('loginMessage') }); // load the index.ejs file
    });
    
app.get('/dashboard', function(req, res) {
    res.render('dashboard.ejs',{
        user :  req.user          
    });
});

// =====================================
// Layers SECTION ======================
// =====================================    
app.get('/relationshiptables', function(req, res) {    
    res.render('relationshiptables.ejs', {
      user : req.user // get the user out of session and pass to template
    });
});

app.get('/dashboard/charts/v00.00.01/employee/layer01/', function(req, res) {
      MetaDetalhes.listar(req.body, function(success){
        res.send(success);
      });
});
    

app.get('/ping', function(req,res){
    res.status(200).send("pong!");
});

};