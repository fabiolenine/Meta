// js/sevidorService.js
angular.module('servidorService',[])

// super simple service
// each function returns a promise object

.factory('Controllers', function($http) {
    return {
        list              : function() {
            return $http.get('http://10.1.2.187:3000/listatotal/');
        },
        total             : function() {
            return $http.get('dashboard/totalizing/v00.00.01/employee/layer01/');
        }
    }
});
