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
      onRemove: '&'
    },
    // controller: NameListDirectiveController,
    // controllerAs: 'list',
    // bindToController: true
  };

  return ddo;
};
function СommentsListDirective() {
  var ddo = {
    templateUrl: 'nameList.html',
    scope: {
      items: '<',
      myTitle: '@title'
    },
    // controller: СommentsListDirectiveController,
    // controllerAs: 'list',
    // bindToController: true
  };

  return ddo;
};


CustomNameListController.$inject = ['CustomService'];
function CustomNameListController(CustomService) {
  var list = this;
  var origTitle = "Comments #1";
  list.title = origTitle + " (" + list.items.length + " items )";

//    // list.removeItem = function (itemIndex) {
//    //  MenuSearchService.removeItem(list.foundItems, itemIndex)};


//   list.items = CustomService.getItems();
//   //list.comments=CustomService.getComments();???
//   list.itemName = "";
//   list.customComment = "";
  list.addItem = function () {
    CustomService.addItem(list.customName);
    list.title = origTitle + " (" + list.items.length + " items )";
  };


//   list.addComment = function(keyEvent) {
//   if (keyEvent.which === 13){
//     CustomService.addComment(list.customComment);

//   }
// };



//   list.removeItem = function (itemIndex) {
//     shoppingList.removeItem(itemIndex);
//     this.title = origTitle + " (" + list.items.length + " items )";
//   };
};


// If not specified, maxItems assumed unlimited
function CustomService() {
  var service = this;

  // List of custom info: name and comments
  var items = [];

  service.addItem = function (itemName) {
      var item = {
        name: itemName,
        // comments: customComment
      };
      items.push(item);
  };

//   service.removeItem = function (itemIndex) {
//     items.splice(itemIndex, 1);
//   };

//   service.getItems = function () {
//     return items;
//   };
//   service.getComments = function () {
//     return comments;
//   };
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