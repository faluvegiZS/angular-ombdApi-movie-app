
import angular from 'angular'

import { MovieItemComponent } from './movie-item/movie-item.component'
import { MovieListComponent } from './movie-list/movie-list.component'
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import MovieService from './movie.service'

const movie = angular
  .module('movies', [])
  .service('MovieService', MovieService)
  .component('movieItem', MovieItemComponent)
  .component('movieList', MovieListComponent)
  .component('movieDetail', MovieDetailComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('movies', {
        url: '/',
        component: 'movieList',
        resolve: {
          movies: MovieService => MovieService.getMovies()
        }
      })
      .state('movie', {
        url: '/movies/:imdbId',
        component: 'movieDetail',
        resolve: {
          movie: (MovieService, $stateParams) => MovieService.getMovie($stateParams.id)
        }
      })
    $urlRouterProvider.otherwise('/')
  })
  .name

export default movie
