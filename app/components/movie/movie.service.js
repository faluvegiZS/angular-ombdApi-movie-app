export default class MovieService {
  constructor ($http) {
    this.$http = $http
  }

  getMovies () {
    return this.$http.get('http://www.omdbapi.com/?apikey=f12ba140&t=batman&y=2019').then(response => response.data)
  }

  getMovie (id) {
    return this.$http.get(`/api/movies/${id}`).then(response => response.data)
  }
}
