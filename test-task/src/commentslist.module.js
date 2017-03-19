(function () {
'use strict';

angular.module('CommentsList', []);

angular.module('CommentsList')
.controller('CommentsListController', CommentsListController)
.service('CommentsListService', CommentsListService)
.directive('commentsList', CommentsListDirective);

})();
