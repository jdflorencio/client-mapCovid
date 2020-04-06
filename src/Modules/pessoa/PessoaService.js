const PessoaService = 'pessoaService'
angular.module(PessoaService, [])
  .factory('PessoaService', function ($http, API) {

    const services = {}

    services.getAll = function () {
      return $http.get(`${API}/pessoa`)
        .then(result => {

          result.data.dados.map(pessoa => {
            if (pessoa.prontuario[0].situacao == 1) {
              pessoa.prontuario[0].situacao = "Casos Suspeito"
            }

            if (pessoa.prontuario[0].situacao == 2) {
              pessoa.prontuario[0].situacao = "Casos análise"
            }

            if (pessoa.prontuario[0].situacao == 3) {
              pessoa.prontuario[0].situacao = "Casos confirmado"
            }

            if (pessoa.prontuario[0].situacao == 4) {
              pessoa.prontuario[0].situacao = "Descartado"
            }
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