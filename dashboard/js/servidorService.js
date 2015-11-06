// js/sevidorService.js
angular.module('servidorService',[])

// super simple service
// each function returns a promise object

.factory('Controllers', function($http) {
    return {
        list              : function() {
            return $http.get('/dashboard/charts/v00.00.01/employee/layer01/');
        },
        total             : function() {
            return $http.get('dashboard/totalizing/v00.00.01/employee/layer01/');
        }
    }
});