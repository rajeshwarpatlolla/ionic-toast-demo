'use strict';
angular.module('ionic-toast')

  .run(['$templateCache', function ($templateCache) {
    var toastTemplate = '<div class="ionic_toast"><div class="toast_section" ng-class="ionicToast.toastClass" ng-style="ionicToast.toastStyle">' +
      '<span class="ionic_toast_close" ng-click="hide()"><i class="ion-close-round toast_close_icon"></i></span>' +
      '<span ng-bind-html="ionicToast.toastMessage"></span></div></div>';

    $templateCache.put('ionic-toast/templates/ionic-toast.html', toastTemplate);
  }]);