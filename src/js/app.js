angular.module('EarlyVotingWeb', [
  'ngRoute',
  'mobile-angular-ui',
  'EarlyVotingWeb.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});