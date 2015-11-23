// js/servidorController.js

angular.module('servidorController',[])

    //inject the Event service factory into our controller
    .controller('chartCTRL', function($scope, $http, Controllers) {

<<<<<<< Updated upstream
Controllers.list().success(function(data) {
		$scope.datasvg = '[[ "Mes", "Total", "Primeiro Grau", "Segundo Grau", "Área Judiciária"]';
            	for(var i in data) {
                	$scope.datasvg += ',["' + data[i].PERIODO + '",' + (data[i].PRIMEIRO_GRAU+data[i].SEGUNDO_GRAU) + ',' + data[i].PRIMEIRO_GRAU + ',' + data[i].SEGUNDO_GRAU + ',' + (data[i].PRIMEIRO_GRAU_JUDICIARIO + data[i].SEGUNDO_GRAU_JUDICIARIO) + ']';
            	};
            	$scope.datasvg += ']';
=======
//        Controllers.list()
//            .success(function(data) {
//                $scope.datajson = $scope.jsonTOsvg(data);
//            });    
    
        $scope.datajson = {"servidor": [
                        {"Mes"           : "12/14",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "01/15",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "02/15",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "03/15",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "04/15",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "05/15",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "05/15",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "06/15",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "07/15",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "08/15",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "09/15",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "10/15",
                        "Total"          : 4920,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381},
                        {"Mes"           : "11/15",
                        "Total"          : 100,
                        "PrimeiroGrau"  : 2627,
                        "SegundoGrau"   : 1207,
                        "AreaJudiciaria": 2381}
                       ]};
    
    
>>>>>>> Stashed changes

	$scope.datajson = {"servidor": data};

	console.log($scope.datajson);

        var datac = google.visualization.arrayToDataTable($.parseJSON($scope.datasvg));

        var options = {
            title       : 'Quantitatico Anual de Servidores Ativos por Área',
            vAxis       : {title: 'Quantidade'},
            hAxis       : {title: 'Período'},
            seriesType  : 'bars',
            series      : {5: {type: 'line'}},
            animation: {"startup": true,
                        duration : 1000,
                                    easing   : 'out'},
            colors: ['#337ab7', '#5cb85c', '#f0ad4e', '#d9534f']
        };

        var chart = new google.visualization.ComboChart(document.getElementById('combo_chart'));

        chart.draw(datac, options);            
});
    
});
