const CidadeService = 'cidadeService'
angular.module(CidadeService, [])
.factory('CidadeService', function($http, API){

    const services = {}

    services.getAll = function() {
      return $http.get(`${API}/cidade`)
      .then( result =>{
        self.cidades =  result.data.dados

      })
      .catch( error => {
          console.log(error)
      })
    }


    return services
    
})

export default CidadeService