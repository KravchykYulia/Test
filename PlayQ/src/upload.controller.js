(function () {
'use strict';

angular.module('App')
.controller('UploadController', UploadController);

UploadController.$inject = ['UserImagesService'];

function UploadController(UserImagesService) {
  var upload = this;
 
};

})();
