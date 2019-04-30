class MovieListController {
  constructor () {
    this.message = 'Hi ngErs!'
  }

  sayHello ({ MovieName }) {
    window.alert(`Hello ${MovieName}!`)
  }
}

export default MovieListController
