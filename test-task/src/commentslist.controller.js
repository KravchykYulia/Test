(function () {
'use strict';

angular.module('CommentsList')
.controller('CommentsListController', CommentsListController);

CommentsListController.$inject = ['CommentsListService'];

function CommentsListController(CommentsListService) {
  var list = this;

  list.customName = "";
  list.customComment = "";
  list.items = CommentsListService.getItems();
 
  list.activeItem = function () {
    return CommentsListService.activeItem();
  }

  list.addItem = function () {
    CommentsListService.addItem(list.customName);
    list.customName = ""
  };

  list.activateItem = function (itemIndex) {
    CommentsListService.activateItem(itemIndex);
  };

  list.removeItem = function (itemIndex) {
    CommentsListService.removeItem(itemIndex);
  };
  
  list.numberOfComments = function (itemIndex) {
    return CommentsListService.numberOfComments(itemIndex);
  }

  list.addComment = function(keyEvent) {
    if (keyEvent.which === 13){
    CommentsListService.addComment(list.customComment);
    list.customComment = ""
    }
  };

};


})();
