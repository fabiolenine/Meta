//routerdashboard.js
module.exports = function(app, metadetalhes, oracledb) 
{
    app.set('views', '/home/Meta/landingpage/');
    
// =====================================
// HOME PAGE (with login links) ========
// =====================================
  
// =====================================
// Lading Page =========================
// =====================================
// show the login form  
app.get('/', function(req, res) {
    res.render('index.ejs');
});
    
app.get('/dashboard', function(req, res) {
    res.render('/home/Meta/dashboard/dashboard.html');
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