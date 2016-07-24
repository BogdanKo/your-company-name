var app = angular.module('app');

'use strict';
app.controller('Document', ['$scope', '$state', 'dataService', 'globalConstants', '$stateParams' ,
        function ($scope, $state, dataService, globalConstants, $stateParams) {
            $scope.documents = {};
            
            $scope.goSettings = function(params) {
                $state.go('main.documents.settings');
            }
            
   

}]);
