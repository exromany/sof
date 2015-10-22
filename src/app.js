import 'style!bootstrap/dist/css/bootstrap.css';
import 'style!angular-loading-bar/build/loading-bar.css'
import 'style!./styles/main.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngLoading from 'angular-loading-bar';
import 'angular-hotkeys';

import config from './app.config';

import search from 'components/search';
import questions from 'components/questions';

angular.module('app', [
  uiRouter,
  ngAnimate,
  'cfp.hotkeys',
  ngLoading,
  search,
  questions
]).config(config);
