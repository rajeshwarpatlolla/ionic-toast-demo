'use strict';
angular.module('ionic-toast.provider', [])

  .provider('ionicToast', function () {

    var config = {
      position: 'bottom',
      showClose: false,
      colorTheme: 'dark',
      timeOut: 2000
    };

    this.configIonicToast = function (inputObj) {
      angular.extend(config, inputObj);
    };


    this.$get = ['$compile', '$document', '$interval', '$rootScope', '$templateCache', '$timeout',
      function ($compile, $document, $interval, $rootScope, $templateCache, $timeout) {

        console.log(config);
        var provider = {};

        var defaultScope = {
          toastClass: '',
          toastMessage: '',
          toastStyle: {
            display: 'none',
            opacity: 0
          }
        };

        var toastPosition = {
          top: 'ionic_toast_top',
          middle: 'ionic_toast_middle',
          bottom: 'ionic_toast_bottom'
        };

        var toastScope = $rootScope.$new();
        var toastTemplate = $compile($templateCache.get('ionic-toast/templates/ionic-toast.html'))(toastScope);

        toastScope.ionicToast = defaultScope;

        $document.find('body').append(toastTemplate);

        var toggleDisplayOfToast = function (display, opacity, callback) {
          toastScope.ionicToast.toastStyle = {
            display: display,
            opacity: opacity
          };
          toastScope.ionicToast.toastStyle.opacity = opacity;
          callback();
        };

        toastScope.hide = function () {
          toggleDisplayOfToast('none', 0, function () {
            console.log('toast hidden');
          });
        };

        provider.show = function (message, position, closeBtn, duration) {

          if (!message || !position || !duration) return;

          if (duration > 5000) duration = 5000;

          angular.extend(toastScope.ionicToast, {
            toastClass: toastPosition[position] + ' ' + (closeBtn ? 'ionic_toast_sticky' : ''),
            toastMessage: message
          });

          toggleDisplayOfToast('block', 1, function () {
            if (closeBtn)  return;

            $timeout(function () {
              toastScope.hide();
            }, duration);
          });
        };

        provider.hide = function () {
          toastScope.hide();
        };

        return provider;

      }
    ];
  });