'use strict';

angular.
  module('galleryApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/admin', {
          template: '<admin-gallery></admin-gallery>'
        }).
        when('/gallery' ,{
          template: '<user-gallery></user-gallery>'
        }).
        otherwise('/gallery');
    }
  ]);


