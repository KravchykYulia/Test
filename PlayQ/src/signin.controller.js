(function () {
'use strict';

angular.module('App')
.controller('SignInController', SignInController);

SignInController.$inject = ['UserImagesService'];

function SignInController(UserImagesService) {
  var signin = this;
  signin.users=[];
// get users info 
  var promise= UserImagesService.getUsersInfo();
  promise.then(function(response){
  	console.log (response.data.users);
    return signin.users=response.data.users;
  })  
// authentication user`s email and password      
  signin.login = function() {
  	var logResult = UserImagesService.login(signin.email,signin.password,signin.users);
  	if(logResult.success){console.log("success");}
  	else {console.log(logResult.message);}
  };


// Нужно присвоить ключ - юсер ид??? тогда переписать логин в сервисе не через сам Save user to LocalStorage !!!
// и в конроллере перевести в другое состояние &location or $state.on???  redirect Blocks View 
// error message throw
// clear form




};

})();
