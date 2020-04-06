const PessoaService = 'pessoaService'
angular.module(PessoaService, [])
.factory('PessoaService', function($http, API){

    const services = {}

    services.getAll = function() {
      return $http.get(`${API}/pessoa`)
      .then( result =>{
        self.pessoas =  result.data.dados

      })
      .catch( error => {
          console.log(error)
      })
    }


    return services
    
})

export default PessoaService