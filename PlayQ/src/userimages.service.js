(function () {
'use strict';

angular.module('App')
.service('UserImagesService', UserImagesService);

UserImagesService.$inject = ['$http', '$rootScope'];
function UserImagesService ($http, $rootScope) {
  var service = this;

  service.getUsersInfo = function () {
    var response = $http({
      method: "GET",
      url: "src/users.json"
    });

    return response;
  };

  service.login = function (email,password,usersArr) {
    var result={};
    var foundUser=usersArr.filter(function(e){return e.email===email && e.password===password});
     if(foundUser.length){
      result={success: true, loginUser: foundUser[0]}}
     else {result={success: false, message: 'Username or password is incorrect'}}
     return result;
  };
  
  service.addImagesData = function (files, userId, numberOfUserImages) {
    if(files){
      for (var i=0; i<files.length; i++){
           files[i].id=i+numberOfUserImages;
           files[i].uploadedUser=userId;
           files[i].checksum=sha256(files[i].preview);
      };
    };
  };

  service.getUser = function () {
     if(!localStorage.user){
      localStorage.user = JSON.stringify({});
     }
     return JSON.parse(localStorage.user);

  };
 
  service.setUser = function (user) {
      localStorage.user = JSON.stringify(user);
  };
  
  service.setUserImages = function (files, userId) {
    if(files){
      var storedImages=[];
      if(localStorage.getItem(userId)){storedImages=JSON.parse(localStorage.getItem(userId));}
      var newFiles=storedImages.concat(files);
      localStorage.setItem(userId, JSON.stringify(storedImages.concat(files)));
    };
  };

  service.updateUserImages = function (files, userId) {
    localStorage.setItem(userId, JSON.stringify(files));
  };

  service.getUserImages  = function (userId) {
      if(!localStorage.getItem(userId)){
      localStorage.setItem(userId, JSON.stringify([]));
     }
     var test=localStorage.getItem(userId);      
     return JSON.parse(test);
  };

  service.getUserImagesNumber  = function (userId) {
     if(!localStorage.userId){
      localStorage.userId = JSON.stringify([]);
     }
     var userImages=JSON.parse(localStorage.userId);
     return userImages.length;
  };
   
  service.removeItem = function (files, itemIndex) {
    return files.splice(itemIndex, 1);
  };
  
  service.openModal = function(index) {
    $rootScope.$emit( "modal:open", {index: index} );
  };
     
};


})();


  

