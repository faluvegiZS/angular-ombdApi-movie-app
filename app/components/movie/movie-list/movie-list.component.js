import controller from './movie-list.controller'

export const MovieListComponent = {
  bindings: {
    movies: '<'
  },
  controller,
  template: `
    <ul class="collection container">
      <movie-item ng-repeat="movie in $ctrl.movies"
                    data="$ctrl.movies">
      </movie-item>
    </ul>
  `
}
