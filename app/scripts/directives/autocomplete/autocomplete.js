angular.module('autocompleteDirective', [])
.controller('autocompleteController', function ($scope) {
 var fileref=document.createElement("link");
      fileref.setAttribute("rel", "stylesheet");
      fileref.setAttribute("type", "text/css");
      fileref.setAttribute("href", 'scripts/directives/autocomplete/autocomplete.css');
  document.getElementsByTagName("head")[0].appendChild(fileref);

  this.data= [];
  this.text = '';
    
  if($scope.remove !== undefined) {
    this.data.splice($scope.remove, 1);
  }

  this.onKeyDown = function () {
    this.data = [];
    if(this.text.length < 2) {
      return;
    }

    for (var i = 0 ; i < $scope.data.length; i++ ){
      if($scope.data[i].name.indexOf(this.text) !== -1) {
        this.data.push($scope.data[i]);
      }
    }

  }

  this.getSelectedItemObj = function () {
    for (var i = 0 ; i < $scope.data.length; i++ ){
      if($scope.data[i].name.indexOf(this.text) !== -1) {
        return $scope.data[i];
      }
    }
  }

  this.send = function (){
     $scope.onSet($scope.item, this.getSelectedItemObj());
  }

  this.select = function (name) {
    this.text = name;
  }





})
.directive('autocomplete', function ($parse) {
  	return { 
  		restrict: 'E',
  		transclude: true,
      controller: 'autocompleteController',
      controllerAs: 'autocompleteCtrl',
      scope: {
        data: '=data',
        item: '=',
        onSet: '='
      },
      link: function (scope, element, attrs) {
      },
  		templateUrl: 'scripts/directives/autocomplete/autocomplete.html'
  	};
  });