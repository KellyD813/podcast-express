(function () {

  var app = angular.module('app', ['plangular'])

  .filter('getTag', function() {
      return function(str) {
          return str.match(/(?:[^\s"]+|"[^"]*")+/g)[0].replace(/"/g, "");
      };
  })

  .filter('fixDate', function() {
      return function(str) {
          var ary = str.split(" ")[0].split("/");
          ary.push(ary.shift());
          return ary.join("/");
      }
  });

  app.config(function(plangularConfigProvider){
    plangularConfigProvider.clientId = "56dbf65179579b2fb83032d13230bbdf";
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

  // Modal

  $('.PodQuest').click(function() {
    $('.modal').toggleClass('is-open');
  });

  $('.close').click(function() {
    $('.modal').removeClass('is-open');
  });

  $('.modal').click(function() {
    $('.modal').removeClass('is-open');
  });

})();






