export default ($urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  }).hashPrefix('!');
};
