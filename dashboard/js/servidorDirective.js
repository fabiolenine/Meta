// js/servidorDirective.js

angular.module('servidorDirective',[])
.directive('gChart',function (){
   return {
      restrict: 'A',
      link: function ($scope, elm, attrs) {
     //   var chart = new google.visualization.LineChart(elm[0]);
    //    chart.draw($scope.chart.data, $scope.chart.options);
      }
    }
  });