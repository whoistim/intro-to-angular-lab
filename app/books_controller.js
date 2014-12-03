var bookly = angular.module("booklyApp", []);

bookly.controller('BooksController', function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.sort = "author";
  $scope.total=0;


  //Code to manage cart goes here
  $scope.cart = [];
  $scope.addToCart = function(book){
    $scope.cart.push(book);
    console.log($scope.cart);
    $scope.total = $scope.total + book.price;
  };

  $scope.dumpTheCart = function() {
    $scope.cart =[];
    $scope.total = 0;
  };


});
