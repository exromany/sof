import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SearchController from './searchController';
import searchTemplate from './searchTemplate.html';

function routing ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('search', {
      url: '/',
      template: searchTemplate,
      controller: 'SearchController',
      controllerAs: 'ctrl'
    });
  $urlRouterProvider.otherwise('/');
}

export default angular.module('app.search', [uiRouter])
  .config(routing)
  .controller('SearchController', SearchController)
  .directive('focusMe', function($timeout) {
    return {
      scope: { trigger: '@focusMe' },
      link: function(scope, element) {
        scope.$watch('trigger', function(value) {
          if(value === 'true') {
            $timeout(function() {
              element[0].focus();
            });
          }
        });
      }
    };
  })
  .name;
