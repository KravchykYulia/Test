(function () {

angular.module('App')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/signin');

  // Set up UI states
  $stateProvider
    .state('signin', {
     url: '/signin',
     templateUrl: 'src/templates/signin.template.html',
     controller: 'SignInController as signin' 
   })
    .state('table', {
      url: '/table',
      templateUrl: 'src/templates/table.template.html',
      controller: 'TableController as table'
    })

   .state('block', {
     url: '/images',
     templateUrl: 'src/templates/block.template.html',
     controller: 'BlockController as block', 
   })
   
   .state('upload', {
     url: '/upload',
     templateUrl: 'src/templates/upload.template.html',
     controller: 'UploadController as upload', 
   })

}
})();

