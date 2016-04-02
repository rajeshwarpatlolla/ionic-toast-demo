angular.module('starter')

  .config(function ($stateProvider, $urlRouterProvider, ionicToastProvider) {

    var config = {
      position: 'top',
      showClose: false,
      colorTheme: 'dark',
      timeOut: 2500
    };
    ionicToastProvider.configIonicToast(config);

    $stateProvider

      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "modules/main/templates/tabs.html"
      })

      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'modules/main/templates/tab-home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('tab.reference', {
        url: '/reference',
        views: {
          'tab-reference': {
            templateUrl: 'modules/main/templates/tab-reference.html',
            controller: 'ReferenceCtrl'
          }
        }
      })

      .state('tab.contact', {
        url: '/contact',
        views: {
          'tab-contact': {
            templateUrl: 'modules/main/templates/tab-contact.html',
            controller: 'ContactCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

  });
