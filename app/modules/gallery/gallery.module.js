'use strict';

angular.
	module('gallery', ['gallery.user', 'gallery.admin', 'ngResource']).
	controller('Gallery', ['$rootScope', '$resource', function($rootScope, $resource){

	$rootScope.images = $resource('data/images.json', {
		method: 'GET',
		isArray: true
	}).query();

}]);
