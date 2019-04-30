export const HeaderComponent = {
  template: `
    <nav>
      <div class="nav-wrapper red darken-4">
        <a href="#" class="brand-logo center">Classic Movies List</a>
      </div>
    </nav>

    <div class="container">
      <div class="row">
      <div class="col-md-12">
          <div class="page-header">
          <h1>{{ title }}</h1>
          </div>
      </div>
      
      
      </div>
      
      <div class="col-md-8">
          <h3>Login MovieApp</h3>
        
          <form ng-submit="formSubmit()" class="form">
          <div class="col-md-4">
              <div class="form-group">
              <input type="text" class="form-control" ng-model="username" placeholder="username" required=""/>
              </div> 
  
              <div class="form-group">
              <input type="password" class="form-control" ng-model="password" placeholder="password" required=""/>
              </div>
  
              <div class="form-group">
              <button type="submit" class="btn btn-success">Login</button>
              <span class="text-danger">{{ error }}</span>
              </div>
          </div>
          </form>
      </div>
        
    </div>
    <hr>
    <hr>
  `
}
