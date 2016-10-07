'use strict';

angular.
  module('gallery.user').
  component('userGallery', {
    templateUrl: 'modules/gallery/user/user-gallery.template.html',
    controller: ['$rootScope',
      function UserGalleryController( $rootScope) {
        var that = this;

        that.images = $rootScope.images;
        that.orderProp = 'date';
      }
    ]
  });
