(function () {
'use strict';

angular.module('App')
.controller('TableController', TableController);

TableController.$inject = ['UserImagesService'];

function TableController(UserImagesService) {
  var table = this;
  var user=UserImagesService.getUser();
  var k=String(user.Id);
  var files=UserImagesService.getUserImages(k);
  table.files=files;

  table.remove = function (index) {
    UserImagesService.removeItem (table.files, index);
    UserImagesService.updateUserImages(table.files, k);
  };
  
  table.openModal =function (index) {          
	  UserImagesService.openModal(index);
  };

};

})();
