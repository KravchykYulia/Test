(function () {
'use strict';

angular.module('App')
.controller('SignInController', SignInController);

SignInController.$inject = ['UserImagesService'];

function SignInController(UserImagesService) {
  var signin = this;

  var promise= UserImagesService.getUsersInfo();
  promise.then(function(response){
  	console.log (response.data);
  	// return signin.UsersInfo=response.data;
  })  
      
    
};

})();
