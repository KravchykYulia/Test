(function () {
'use strict';

angular.module('myApp', [])
.controller('CustomNameListController', CustomNameListController)
.service('CustomService', CustomService)
.directive('nameList', NameListDirective)
.directive('commentsList', СommentsListDirective);


function NameListDirective() {
  var ddo = {
    templateUrl: 'nameList.html',
    scope: {
      items: '<',
      onRemove: '&',
      onActive: '&'
    },
    controller: NameListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
};

function NameListDirectiveController() {
  var list = this;
};

function СommentsListDirective() {
  var ddo = {
    templateUrl: 'commentsList.html',
    scope: {
      items: '<',
      myTitle: '@title'
    },
    controller: СommentsListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
};
function СommentsListDirectiveController() {
  var list = this;
};

CustomNameListController.$inject = ['CustomService'];
function CustomNameListController(CustomService) {
  var list = this;
  list.items = CustomService.getItems();
  var origTitle = "Comments #";
  list.title = origTitle
  // + " (" + list.items.length + " items )";

  list.customName = "";
  list.customComment = "";
  list.addItem = function () {
    CustomService.addItem(list.customName);
    // list.title = origTitle + " (" + list.items.length + " items )";
    list.customName = ""
    // console.log(list.items);
  };

  list.activateItem = function (itemIndex) {
    CustomService.activateItem(itemIndex);
    // console.log(list.items);
  };

  list.removeItem = function (itemIndex) {
    CustomService.removeItem(itemIndex);
    // console.log(list.items);
  };

  list.addComment = function(keyEvent) {
    if (keyEvent.which === 13){
    CustomService.addComment(list.customComment);
    list.customComment = ""
    }
   
 
  };

};



function CustomService() {
  var service = this;

  // List of custom`s name
  var items = [];

  service.addItem = function (itemName) {
      for (var i=0; i<items.length; i++)
        {items[i].active=false} ;
      var item = {
        name: itemName,
        active: true,
        comments: []
      };
      items.push(item);
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.activateItem = function (itemIndex) {
    for (var i=0; i<items.length; i++){
           if(i===itemIndex) 
           {items[i].active=true}
           else {items[i].active=false}     
    }
  };
  service.addComment = function (itemComment) {
     for (var i=0; i<items.length; i++){
           if(items[i].active===true) 
           {items[i].comments.push(itemComment)}
     };
 };

};


})();


// app.directive('myEnter', function () {
//     return function (scope, element, attrs) {
//         element.bind("keydown keypress", function (event) {
//             if(event.which === 13) {
//                 scope.$apply(function (){
//                     scope.$eval(attrs.myEnter);
//                 });

//                 event.preventDefault();
//             }
//         });
//     };
// });

// function NameListDirectiveController() {
//   var list = this;
// }