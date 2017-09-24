(function () {

    let app = angular.module('store', []);
  //Controlador carga información que tiene el json
    app.controller('DatosController', function($scope,$http){
        //$http obtiene datos de json y $scope muestra los datos
             $http.get('./js/datos.json').then(function(data){
           $scope.datosC=data.data;
        
                });
    });
})();