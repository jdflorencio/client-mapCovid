const PessoaService = 'pessoaService'
angular.module(PessoaService, [])
  .factory('PessoaService', function ($http, API) {

    const services = {}

    services.getAll = function () {
      return $http.get(`${API}/pessoa`)
        .then(result => {

          const table = {
            1: "Caso Suspeito",
            2: "Caso em Análise",
            3: "Caso Confirmado",
            4: "Caso Descartado",
        }


          result.data.dados.map(pessoa => {
            pessoa.situacao = table[pessoa.situacao]
        })
        
      self.pessoas = result.data.dados

    })
  .catch(error => {
    console.log(error)
  })
    }


return services
    
})

export default PessoaService