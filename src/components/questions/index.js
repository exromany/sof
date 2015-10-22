import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';

import Questions from './questionsService';
import QuestionsController, { AnswersController, QuickViewController } from './questionsController';
import TableDirective from './tableDirective';

import routing from './routing';

export default angular.module('app.questions', [uiRouter, ngResource, ngSanitize])
  .config(routing)
  .factory('Questions', Questions)
  .directive('questions', TableDirective)
  .controller('QuickViewController', QuickViewController)
  .controller('QuestionsController', QuestionsController)
  .controller('AnswersController', AnswersController)
  .name;
