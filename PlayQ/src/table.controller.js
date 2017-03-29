(function () {
'use strict';

angular.module('App')
.controller('TableController', TableController);

TableController.$inject = ['UserImagesService'];

function TableController(UserImagesService) {
  var table = this;
 
};

})();
