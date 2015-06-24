angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {

    $scope.showToastTop = function(){
      //ionicToast.show('This is a toast at the top.', 'top', true, 2500);
    };

    $scope.showToastMiddle = function(){
      //ionicToast.show('This is a toast at the middle.', 'middle',false, 10000);
    };

    $scope.showToastBottom = function(){
      //ionicToast.show('This is a toast at the bottom.', 'bottom',false, 20000);
    };

  })

.controller('ReferenceCtrl', function($scope, Chats) {

})

.controller('ContactCtrl', function($scope) {

});
