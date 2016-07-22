var app = angular.module('app', ['angular-ellipses', 'ui.router', 'LocalStorageModule', 'dataServiceModule', 'chart.js', '720kb.datepicker'])

// Optional configuration
  .config(['ChartJsProvider', function(ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
      showLines: false
    });
  }])
  .controller("LineCtrl", ['$scope', '$timeout', function($scope, $timeout) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function(points, evt) {
      console.log(points, evt);
    };

    // Simulate async data update
    $timeout(function() {
      $scope.data = [
        [28, 48, 40, 19, 86, 27, 90],
        [65, 59, 80, 81, 56, 55, 40]
      ];
    }, 3000);
  }]);


app.constant('globalConstants', {
  apiUrl: "http://localhost:51925/",
  landingId: "admin",
  doctorPrescription: [ "Unsure", "Yes", "No" ]
});

app.controller('Ctrl', function($scope, $http) {

  var view = 0;

  $http.get('content/data/help-msg.json').success(function(data){$scope.helpMsg = data;});
  $http.get('content/data/machine.json').success(function(data){$scope.machineData = data;});

  $scope.pageSelection = function(pageNumber) {view = pageNumber;}
  $scope.returnActiveClass = function(pageNumber) {return (pageNumber == view) ? 'active' : '';}

});

app.run(function($rootScope, $templateCache) {
  $rootScope.$on('$viewContentLoaded', function() {
    $templateCache.removeAll();
  });
});
