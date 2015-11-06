//routesir.js
module.exports = function(app, metadetalhes, oracledb) 
{
    app.set('views', '../landingpage');
    
// =====================================
// HOME PAGE (with login links) ========
// =====================================
  
// =====================================
// Lading Page =========================
// =====================================
// show the login form  
    app.get('/', function(req, res) {
        res.render('index.html', {   //isAuthenticated: false,
                                    message: req.flash('loginMessage') }); // load the index.ejs file
    });
    
app.get('/dashboard', function(req, res) {
    res.render('dashboard.html',{
        user :  req.user          
    });
});

// =====================================
// Layers SECTION ======================
// =====================================    
app.get('/relationshiptables', function(req, res) {    
    res.render('relationshiptables.html', {
      user : req.user // get the user out of session and pass to template
    });
});

//app.get('/dashboard/charts/v00.00.01/employee/layer01/', function(req, res) {
//      metadetalhes.listar(req.body, function(success){
//        res.send(success);
//      });
//});
    

app.get('/ping', function(req,res){
    res.status(200).send("pong!");
});

};