angular.module('listings').controller('ListingsController', ['$scope', '$sce', 'Listings', 
  function($scope, $sce, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function() {
      console.log("Adding Contact");
      console.log($scope.listing);
      console.log($scope.listings);
      //Adds it to Listings
      $scope.listings.push($scope.listing);
      //Set listings to be empty after added
      console.log($scope.listings)
      $scope.listing = "";
    };

    $scope.deleteListing = function(index) {
      console.log("Deleting");
      $scope.listings.splice(index, 1);
      $scope.detailedInfo.coordinates = " ";
      $scope.detailedInfo.address = " ";
      $scope.detailedInfo.googleMapURL = " ";
      $scope.detailedInfo.mapMessage = " "
    };

    $scope.showDetails = function(index) {
      console.log("Showing Details");
      $scope.detailedInfo = $scope.listings[index];
      if($scope.detailedInfo.coordinates == null){
        $scope.detailedInfo.coordinates = "Coordinates not found";
      }
      if($scope.detailedInfo.address == null){
        $scope.detailedInfo.address = "Address not found";
      }
      if($scope.detailedInfo.googleMapURL == null){
        $scope.detailedInfo.googleMapURL = " ";
        $scope.detailedInfo.mapMessage = "No map provided";
      }
    };

    $scope.trustSrc = function(googleMapURL) {
      return $sce.trustAsResourceUrl(googleMapURL);
    }
  }
]);