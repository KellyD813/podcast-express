console.log("linked");

(function () {

    var app = angular.module('app', ['plangular'])

    app.config(function(plangularConfigProvider){
      plangularConfigProvider.clientId = "56dbf65179579b2fb83032d13230bbdf";
      // plangularConfigProvider.clientId = process.env.SOUNDCLOUD_CLIENT_ID;
    });

    app.controller('TrackController', function($scope) {
        $scope.sortType     = 'title';
        $scope.sortType     = 'created_at';
        $scope.sortType     = 'duration';
        $scope.sortType     = 'src';
        $scope.sortType     = 'tag_list';
        $scope.sortReverse  = false;
        $scope.searchPods   = '';
    })


})();