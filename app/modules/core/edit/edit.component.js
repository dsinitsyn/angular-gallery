'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('core').
  component('edit', {
    templateUrl: 'modules/core/edit/edit.template.html',
    controller: ['$element', function PhoneListController($element) {
        var ctrl = this;
        ctrl.editMode = false;

        ctrl.handleModeChange = function(self) {
          if (ctrl.editMode) {
            ctrl.onUpdate({value: ctrl.fieldValue});
          }
          ctrl.editMode = !ctrl.editMode;

          setTimeout(function(){
            $element.find('.edit-element').focus();
          });

        };

        ctrl.$onInit = function() {
          if (!ctrl.fieldType) {
            ctrl.fieldType = 'text';
          }
        };
      }
    ],
    bindings:{
      onUpdate: '&',
      fieldValue: '<',
      fieldType: '@',
      fieldName: '@'
    }
  });