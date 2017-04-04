(function () {
'use strict';

angular.module('App')
.controller('UploadController', UploadController).directive('fileDropzone', fileDropzone);

UploadController.$inject = ['UserImagesService','$state']; 

function UploadController(UserImagesService, $state) { 
  var upload = this;

  upload.save = function(files){
    var user=UserImagesService.getUser();
    var k=String(user.Id);
    var numberOfUserImages = UserImagesService.getUserImagesNumber(k);

  	if(user.Id){
  		UserImagesService.addImagesData(files, k, numberOfUserImages);
  	  UserImagesService.setUserImages(files, k);
  	}
  
    else {
    	$state.go("signin");
    }   
  };

  upload.remove = function (files, index) {
  	UserImagesService.removeItem(files, index);
  }
};



function fileDropzone() {
  return {
    restrict: 'A',
    scope: {
      filesToUpload: '='
    },
    link: function(scope, element, attrs) {
      	scope.filesToUpload = [];
        var validMimeTypes = attrs.fileDropzone;

        var isTypeValid = function(type) {
        if ((validMimeTypes === undefined || validMimeTypes === '') || (validMimeTypes.indexOf(type) > -1)) { 
          return true;
        } else {
          alert("Invalid file type.  File must be one of following types " + validMimeTypes);
          return false;
        }
        };

        element.bind('dragover', function(event){
            if (event != null) {
                event.preventDefault();
            }
            event.dataTransfer.effectAllowed = 'copy';
        });

        element.bind('dragenter', function(event){
            if (event != null) {
                event.preventDefault();
            }
            event.dataTransfer.effectAllowed = 'copy';
        });

        element.bind('drop', function(event){
            if (event != null) {
                event.preventDefault();
            }    
           
            angular.forEach (event.dataTransfer.files, function(file){
            	var  reader = new FileReader();
                reader.onload = function(event) {
                 if (isTypeValid(file.type)) {
                  scope.$apply(function() {
                     var newFilePreviw = event.target.result;
                     var newFileName = file.name;
                     var newFileSize = file.size; 
                     var fileObject = {
                     	file: file,
                     	imageName: newFileName,
                     	fileSize: newFileSize,
                     	preview: newFilePreviw
                     };  
                     scope.filesToUpload.push(fileObject);
                  });
                 };
                };
                reader.readAsDataURL(file);
            });
        });

        element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                var file=changeEvent.target.files[0];
                 if (isTypeValid(file.type)){
                    var fileObject={};
                    reader.onload = function (loadEvent) {
                      scope.$apply(function () {
                         var newFilePreviw = loadEvent.target.result;
                         fileObject.preview = newFilePreviw;       
                        });
                    };
                    fileObject.file=file;
                    fileObject.imageName=file.name;
                    fileObject.fileSize=file.size;
                    scope.filesToUpload.push(fileObject);
                };    
                reader.readAsDataURL(changeEvent.target.files[0]);
        });
    

    }
  }
};



})();


