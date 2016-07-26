angular.module('aw')

  .controller('GlobalCtrl', ['$scope','$ionicHistory', function ($scope) {
    console.log('GlobalCtrl.');
    
    $scope.goBack = function () {
     $ionicHistory.goBack(); 
    } 
    
  }]);
