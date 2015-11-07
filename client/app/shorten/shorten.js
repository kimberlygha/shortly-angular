angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function () {
    $scope.link.url = $scope.input;
    Links.createLink($scope.link).then(function (link) {
      $scope.input = '';
      if (link.url) {
        $scope.post = link;
      } else {
        $scope.error = 'Please enter a valid URL';
      }
    });
  };
});
