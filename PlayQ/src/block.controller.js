(function () {
'use strict';

angular.module('App')
.controller('BlockController', BlockController);

BlockController.$inject = ['UserImagesService'];

function BlockController(UserImagesService) {
  var block= this;
  var user=UserImagesService.getUser();
  var k=String(user.Id);
  block.files=UserImagesService.getUserImages(k);

  block.remove = function (index) {
    UserImagesService.removeItem (block.files, index);
    UserImagesService.updateUserImages(block.files, k);
  };
 
};

})();
