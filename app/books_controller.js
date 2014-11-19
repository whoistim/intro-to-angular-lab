var bookly = angular.module("booklyApp", []);

bookly.controller('BooksController', function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here

});
