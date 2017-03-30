(function () {

angular.module('App')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('table', {
      url: '/',
      templateUrl: 'src/templates/table.template.html',
      controller: 'TableController as table'
      // resolve: {
      //   items: ['UserImagesService', function (UserImagesService) {
      //     return UserImagesService.getMenuCategories();
      // }]
     //}
    })

   .state('block', {
     url: '/images',
     templateUrl: 'src/templates/block.template.html',
     controller: 'BlockController as block', 
     // resolve: {
     //  items: ['UserImagesService', function (UserImagesService) {
     //    return UserImagesService.getMenuCategories();
     //  }]
     //}
   })
   
   .state('upload', {
     url: '/upload',
     templateUrl: 'src/templates/upload.template.html',
     controller: 'UploadController as upload', 
     // resolve: {
     //  items: ['UserImagesService', function (UserImagesService) {
     //    return UserImagesService.getMenuCategories();
     //  }]
    // }
   })

   .state('signin', {
     url: '/signin',
     templateUrl: 'src/templates/signin.template.html',
     controller: 'SignInController as signin' 
   })
}
})();

