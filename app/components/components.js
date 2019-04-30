import angular from 'angular'

import movie from './movie'

const components = angular
  .module('app.components', [movie])
  .name

export default components
