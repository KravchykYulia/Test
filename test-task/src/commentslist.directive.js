(function () {
'use strict';

angular.module('CommentsList')
.directive('commentsList', CommentsListDirective);

function CommentsListDirective() {
  var ddo = {
    templateUrl: 'src/commentsList.template.html',
    scope: {
      items: '<',
      emptyname: '<',
      emptycomment: '<',
      onRemove: '&',
      onActive: '&',
      activeName: '&',
      numberComments: '&',
      addName: '&',
      addComment: '&'
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
