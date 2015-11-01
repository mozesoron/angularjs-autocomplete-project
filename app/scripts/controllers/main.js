'use strict';

/**
 * @ngdoc function
 * @name angularjsAutocompleteProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsAutocompleteProjectApp
 */
angular.module('angularjsAutocompleteProjectApp', ['autocompleteDirective'])
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.dataForAutocomplete = [
	    {name: 'hello', value: '1'},
	    {name: 'angular boy', value: '2'},
	    {name: 'boy', value: '3'},
	    {name: 'girl', value: '4'},
	    {name: 'world', value: '5'},
	    {name: 'eat', value: '6'},
	    {name: 'drink', value: '7'},
	    {name: 'play', value: '8'},
	    {name: 'video', value: '9'},
	    {name: 'game', value: '10'},
	    {name: 'basketball', value: '11'},
	    {name: 'directive', value: '12'},

    ];

   	this.items =[ 
   		{item:'1', name:'', value:''},
   		{item:'2', name:'', value:''},
   		{item:'3', name:'', value:''}
   	];

   	this.setItem = function (index, obj) {
   		console.log(index, obj);
   	};

  });



 
