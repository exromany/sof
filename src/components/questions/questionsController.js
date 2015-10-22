export default function QuestionsController ($scope, questions, $stateParams, $state, hotkeys) {
  $scope.loaded = false;
  questions.$promise.then(() => {
    $scope.loaded = true;
  })
  $scope.questions = questions;
  $scope.query = $stateParams.query;

  hotkeys.bindTo($scope)
    .add({
      combo: 'esc',
      callback: () => {
        $state.go('search');
      }
    });
}

export function AnswersController ($scope, question, $state, hotkeys) {
  $scope.question = null;
  $scope.notFound = false;

  question.$promise.then(data => {
    if (!data.items || !data.items.length) {
      $scope.notFound = true;
    } else {
      $scope.question = data.items[0];
    }
  }).catch(() => {
    $scope.notFound = true;
  });

  hotkeys.bindTo($scope)
    .add({
      combo: 'esc',
      callback: () => {
        $state.go('search');
      }
    });
}

export function QuickViewController ($scope, questions, $stateParams, $state, hotkeys) {
  $scope.questions = questions;
  $scope.type = $stateParams.type;
  $scope.tag = $stateParams.tag;
  $scope.author = $stateParams.author;

  hotkeys.bindTo($scope)
    .add({
      combo: 'esc',
      callback: () => {
        $state.go('^');
      }
    });
}
