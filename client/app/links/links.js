angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function () {
    Links.getLink().then(function (links) {
      console.log('These are the links we getting', links);
      $scope.data = links.sort(function (a,b) {
        return b.visits - a.visits;
      });
    });
  };
});
