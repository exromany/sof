export default function SearchController ($scope, $state) {
  $scope.submit = () => {
    if ($scope.query !== '') {
      $state.go('questions.search',{query: $scope.query});
    }
  }
}
