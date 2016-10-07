'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('core').
  component('uploader', {
    templateUrl: 'modules/core/uploader/uploader.template.html',
    controller: ['$element', function UploaderController($element) {
        var ctrl = this;
        ctrl.image = "";
        ctrl.file = $element.find('#ng-uploader');

        ctrl.upload = function(){
          
          var imageObject = {
            imageUrl: ctrl.image.src,
            name: ctrl.file[0].files[0].name,
            tip: '',
            date: -Math.round(new Date().getTime()/1000)
          }
          ctrl.onUpload({image: imageObject});
          ctrl.image = "";
        }
      }
    ],
    bindings:{
      onUpload: '&'
    }
  });