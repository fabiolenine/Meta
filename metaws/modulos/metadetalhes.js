//metadetalhes.js
module.exports = function(oracledb,dbconfig)
{

var listar = function(data, callback){
oracledb.getConnection(dbConfig,
function(err, connection)
{
        if (err) {
                console.error(err.message);
                return;
                }
                connection.execute(
                        "SELECT * " +
                        "FROM SAJADM.DashboardServidor",
                        function(err,result)
                        {
                                if (err) {
                                        console.error(err.message);
                                        doRelease(connection);
                                        return;
                                        }
                                console.log(result.metaData);
                                console.log(result.rows);
				callback(result.rows);
                                doRelease(connection);
                        });
                });
};

function doRelease(connection)
{
        connection.release(
                function(err) {
                        if (err) {
                                console.error(err.message);
                                }
                        });
};    
    
var retorno = {"listar" : listar};

return retorno;	    
}
