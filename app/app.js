var app = angular.module('app', ['angular-ellipses', 'ui.router', 'LocalStorageModule', 'dataServiceModule']);

app.constant('globalConstants', {
  //apiUrl: "http://localhost:51925/",
  apiUrl: "http://vba-excel-backend.azurewebsites.net/",
  landingId: "admin",
  doctorPrescription: [ "Unsure", "Yes", "No" ]
});

app.controller('Ctrl', function($scope, $http) {

  var view = 0;

  $http.get('content/data/help-msg.json').success(function(data){$scope.helpMsg = data;});
  $http.get('content/data/machine.json').success(function(data){$scope.machineData = data;});

  $scope.pageSelection = function(pageNumber) {view = pageNumber;}
  $scope.returnActiveClass = function(pageNumber) {return (pageNumber == view) ? 'active' : '';}
  $scope.returnClassNewMsg = function(newMsg) {return newMsg ? 'new' : '';};

});

app.run(function($rootScope, $templateCache) {
  $rootScope.$on('$viewContentLoaded', function() {
    $templateCache.removeAll();
  });
});

