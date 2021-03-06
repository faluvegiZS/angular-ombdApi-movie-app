 
import controller from './movie-item.controller'

export const MovieItemComponent = {
  bindings: {
    data: '<',
    onSayHello: '&'
  },
  controller,
  template: `
{{$ctrl.data.imdbID}}
    <li class="collection-item avatar" style="border-bottom: 1px solid #cccccc;">
      <img class="circle" width="150px" ng-src="{{$ctrl.data.Poster}}" alt="{{$ctrl.data.Year}}" />
      <span class="title">{{$ctrl.data.Title}}</span>
      <p><a ng-href="#/movie/{{$ctrl.data.id}}">{{$ctrl.data.talk}}</a></p>
      <div class="secondary-content" style="cursor: pointer;" ng-click="$ctrl.onClick();">
      <p><a ng-href="/movie/{{$ctrl.data.imdbID}}">Detail</a></p>
      </div>
    </li>
  `
}
