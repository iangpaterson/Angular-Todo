angular.module('TodoDirective', []).directive('todoTable', function() {
	return {
		/*
		restrict: 'E',	// E -> element
		restrict: 'A',	// A -> attribute
		*/
		restrict: 'EA',	// element OR attribute
		templateUrl: 'templates/directives/todo-table.html'
	};
});