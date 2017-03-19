(function () {
'use strict';

angular.module('CommentsList')
.service('CommentsListService', CommentsListService);

function CommentsListService() {
  var service = this;

  var items = [];

  service.getItems = function () {
    return items;
  };

  service.activeItem = function () {
     var foundItem=1;
     for (var i=0; i<items.length; i++){
           if(items[i].active===true) 
           {foundItem=i+1}
     };
     return foundItem;
  };

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

  service.activateItem = function (itemIndex) {
    for (var i=0; i<items.length; i++){
           if(i===itemIndex) 
           {items[i].active=true}
           else {items[i].active=false}     
    }
  };
  
  service.removeItem = function (itemIndex) {
    if(items[itemIndex].active===true)
      {items[0].active=true}
    items.splice(itemIndex, 1);
  };
  
  service.numberOfComments = function (itemIndex) {
     return items[itemIndex].comments.length;
  } 

  service.addComment = function (itemComment) {
     for (var i=0; i<items.length; i++){
           if(items[i].active===true) 
           {items[i].comments.push(itemComment)}
     };
  };

};


})();
