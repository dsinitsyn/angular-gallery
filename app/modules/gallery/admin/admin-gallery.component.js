'use strict';

angular.
  module('gallery.admin').
  component('adminGallery', {
    templateUrl: 'modules/gallery/admin/admin-gallery.template.html',
    controller: ['$rootScope', 
      function AdminGalleryController($rootScope) {
        var that = this;
        that.images = $rootScope.images;
        that.orderProp = 'date';
        that.preview = false;

        that.update = function(self, prop, value){
          self.image[prop] = value;
          $rootScope.images = that.images;
        }

        that.handlePreviewMode = function(){
          that.preview = !that.preview;
        }

        that.delete = function(self){
          if (confirm("Are you sure you want to delete this image?") == true) {
            var idx = that.images.indexOf(self.image);
             if (idx >= 0) {
              that.images.splice(idx, 1);
              $rootScope.images = that.images;
            }
          }
        }

        that.add = function(image){
          that.images.push(image);
        }

      }
    ]
  });
