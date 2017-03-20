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

CommentsListDirectiveController.$inject =['$scope']
function CommentsListDirectiveController($scope) {
  var list = this;
  list.clearInput = function (keyEvent) {
    if (keyEvent.which === 13) {
      list.customName="";
    };

  }
  // var cancelListener=$scope.$on('comment:add', function (e, data){
  //   console.log(e);
  //   list.customName="";
  // });
  // list.$onDestroy=function (){
  //   cancelListener();
  // };
};

})();
