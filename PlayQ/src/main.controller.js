(function () {
'use strict';

angular.module('App')
.controller('AppController', AppController);

AppController.$inject = ['UserImagesService', '$state'];

function AppController(UserImagesService, $state) {
  var main= this;
  var user=UserImagesService.getUser();
  
  main.removeUser = function () {
    localStorage.removeItem(user);
    $state.go("signin");
  };
 
};

})();
