import layoutTemplate from './layoutTemplate.html';
import quickviewTemplate from './quickviewTemplate.html';
import questionsTemplate from './questionsTemplate.html';
import answersTemplate from './answersTemplate.html';

export default function routing ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('questions', {
      url: '',
      abstract: true,
      template: layoutTemplate
    })
    .state('questions.search', {
      url: '/q/:query',
      template: questionsTemplate,
      controller: 'QuestionsController',
      controllerAs: 'ctrl',
      resolve: {
        questions: (Questions, $stateParams) => Questions.search({intitle: $stateParams.query})
      }
    })
    .state('questions.search.quickview', {
      params: { author: null, tag: null, type: null },
      resolve: {
        questions: (Questions, $stateParams) => {
          switch($stateParams.type) {
            case 'tag':
              return Questions.byTag({tag: $stateParams.tag});
            case 'author':
              return Questions.byAuthor({id: $stateParams.author.user_id});
          }
        }
      },
      views: {
        quickview: {
          template: quickviewTemplate,
          controller: 'QuickViewController'
        }
      }
    })
    .state('questions.answers', {
      url: '/question/:id',
      template: answersTemplate,
      controller: 'AnswersController',
      controllerAs: 'ctrl',
      resolve: {
        question: (Questions, $stateParams) => Questions.get({id: $stateParams.id})
      }
    });
}
