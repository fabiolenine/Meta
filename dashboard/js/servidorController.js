// js/servidorController.js

angular.module('servidorController',[])

    //inject the Event service factory into our controller
    .controller('chartCTRL', function($scope, $http, Controllers) {

	Controllers.list().success(function(data) {
		$scope.datasvg = '[[ "Mes", "Total", "Primeiro Grau", "Segundo Grau", "Área Judiciária"]';
            	for(var i in data) {
                	$scope.datasvg += ',["' + data[i].PERIODO + '",' + (data[i].PRIMEIRO_GRAU+data[i].SEGUNDO_GRAU) + ',' + data[i].PRIMEIRO_GRAU + ',' + data[i].SEGUNDO_GRAU + ',' + (data[i].PRIMEIRO_GRAU+data[i].SEGUNDO_GRAU) + ']';
            	};
            	$scope.datasvg += ']';

	console.log($scope.datasvg);

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
