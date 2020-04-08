const HomeService = 'homeService'
angular.module(HomeService, [])
.factory('HomeService', function($http, API){

    const services = {}

    services.getAll = function() {
      return $http.get(`${API}/quadro`)
      .then( result =>{

        self.quadro =  result.data.dados

      })
      .catch( error => {
          console.log(error)
      })
    }
    return services    
})

export default HomeService