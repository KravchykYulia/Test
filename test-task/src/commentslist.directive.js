(function () {
'use strict';

angular.module('CommentsList')
.directive('commentsList', CommentsListDirective);

function CommentsListDirective() {
  var ddo = {
    templateUrl: 'commentsList.html',
    scope: {
      items: '<',
      onRemove: '&',
      onActive: '&',
      activeName: '&',
      numberComments: '&'
    },
    controller: CommentsListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
};

function CommentsListDirectiveController() {
  var list = this;
};

})();
