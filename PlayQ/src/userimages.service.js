(function () {
'use strict';

angular.module('App')
.service('UserImagesService', UserImagesService);

UserImagesService.$inject = ['$http'];
function UserImagesService ($http) {
  var service = this;
  // var items = [];

  service.getUsersInfo = function () {
    var response = $http({
      method: "GET",
      url: "/src/users.json"
    });

    return response;
  };
  service.login = function (email,password,usersArr) {
    var result={};
     if(usersArr.some(function(e){return e.email===email && e.password===password})){
      result={success: true}}
     else {result={success: false, message: 'Username or password is incorrect'}}
     console.log(result);
     return result;
    };


  // service.updateItems = function (itemsArr) {
  //   if (window.localStorage && itemsArr) {  
  //      localStorage.setItem("customs", angular.toJson(itemsArr));}  
  //   items = itemsArr;  
  // };

  // service.getItems = function () {
  //   items = angular.fromJson(localStorage.getItem("customs"));                       
  //   items = items ? items : [];
  //   return items;
  // };
  

  // service.addItem = function (itemName) {
  //     for (var i=0; i<items.length; i++)
  //       {items[i].active=false} ;
  //     var item = {
  //       name: itemName,
  //       active: true,
  //       comments: []
  //     };
  //     items.push(item);
  // };

  
  // service.removeItem = function (itemIndex) {
  //   if(items[itemIndex].active===true)
  //     {items[0].active=true}
  //   items.splice(itemIndex, 1);
  // };
  

};


})();
