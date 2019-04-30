export const MovieDetailComponent = {
  bindings: {
    movie: '<'
  },
  template: `
    <article class="card">
      <figure class="card-image">
        <img width="250px" src="{{$ctrl.movie.photo}}" alt="{{$ctrl.movie.name}}" />
        <span ng-click="$ctrl.onClick();" class="card-title">{{$ctrl.movie.name}}</span>
      </figure>
      <section class="card-content">
        <h5>{{$ctrl.movie.talk}}</h5>
        <p>{{$ctrl.movie.description}}</p>
      </section>
      <aside class="card-action">
        <a href="#">{{$ctrl.movie.complexity}}</a>
      </aside>
    </article>
  `
}
