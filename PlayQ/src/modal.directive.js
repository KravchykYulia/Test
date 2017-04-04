(function () {
'use strict';

angular.module('App')
.directive('modal', ModalDirective);

ModalDirective.$inject = ['UserImagesService', '$rootScope'];

function ModalDirective(UserImagesService, $rootScope) {
  return { link: function (scope, element, attrs) {
              scope.display=false;
              
              $rootScope.$on("modal:open", function handleModalOpenEvent( event, data ) {
                            scope.display = true;
                            scope.index=data.index;
              });
            
              element.on('click', function (e) {
                var outside=element[0].querySelector('.modal');
                if ( outside === event.target ) {
                   return  scope.$apply(scope.display=false); 
                }             
              });
        }
   };

};

})();
