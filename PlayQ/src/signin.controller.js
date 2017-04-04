(function () {
'use strict';

angular.module('App')
.controller('SignInController', SignInController);

SignInController.$inject = ['UserImagesService', '$state'];

function SignInController(UserImagesService, $state) {
  var signin = this;
  signin.users=[];
  var promise= UserImagesService.getUsersInfo();
  promise.then(function(response){
    return signin.users=response.data.users;
  })  
// authentication user`s email and password      
  signin.login = function() {
  	signin.loginErrorMessage="";
  	var logResult = UserImagesService.login(signin.email,signin.password,signin.users);
  	if(logResult.success){
  		$state.go("block");
  		UserImagesService.setUser(logResult.loginUser);
  	}
  	else {signin.loginErrorMessage=logResult.message;};
  	signin.email="";
  	signin.password="";
  };
};

})();
