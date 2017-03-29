(function () {
'use strict';

angular.module('App')
.controller('SignInController', SignInController);

SignInController.$inject = ['UserImagesService'];

function SignInController(UserImagesService) {
  var signin = this;
 
};

})();
