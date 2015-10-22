import angular from 'angular';
import template from './tableTemplate.html';

export default function tableDirective () {
  return {
    restrict: 'A',
    replace: true,
    template: template,
    scope: {
      rows: '=questions'
    },
    controller: ($scope, $state, $filter, hotkeys) => {
      const sorts = ['question_id','owner.display_name','title','answer_count','tags'];
      $scope.sortAsc = false;
      $scope.sortBy = 0;
      $scope.sort = () => (($scope.sortAsc ? '+' : '-') + sorts[$scope.sortBy])

      $scope.active = 0;
      $scope.setActive = (index) => $scope.active = index;
      $scope.isActive = (index) => $scope.active === index;
      let activeItem = () => $filter('orderBy')($scope.rows, $scope.sort())[$scope.active];

      $scope.openAnswers = (event) => {
        if (angular.isNumber(event)) {
          $scope.active = event;
        }
        const item = activeItem();
        $state.go('questions.answers', {id: item.question_id});
      }
      $scope.quickAuthor = (event) => {
        const item = activeItem();
        $state.go('questions.search.quickview', {type: 'author', author: item.owner});
      }

      hotkeys.bindTo($scope)
        .add({
          combo: 'ctrl+down',
          callback: (event) => {
            if ($scope.active < $scope.rows.length - 1) {
              $scope.active += 1;
            }
          }
        })
        .add({
          combo: 'ctrl+up',
          callback: (event) => {
            if ($scope.active > 0) {
              $scope.active -= 1;
            }
          }
        })
        .add({
          combo: 'ctrl+space',
          callback: $scope.quickAuthor
        })
        .add({
          combo: 'ctrl+enter',
          callback: $scope.openAnswers
        });
    }
  }
}
