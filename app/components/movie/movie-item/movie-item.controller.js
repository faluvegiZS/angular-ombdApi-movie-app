
class MovieItemController {
  constructor () {}

  onClick () {
    this.onSayHello({
      $event: {
        movieName: this.data.name
        
      }
    })
  }
}

export default MovieItemController
