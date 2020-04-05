const CidadeFormService = 'cidadeFormService'
angular.module(CidadeFormService, [])
    .factory('CidadeFormService', function ($http, API) {
        const services = {}
        services.getOne = function (id) {
            return $http.get(`${API}/cidade/${id}`)
                .then(result => {
                    self.cidade = result.data.dados
                })
                .catch(error => {
                    console.log(error)
                })
        }

        services.ufs = function () {
            self.ufs = [
                { descricao: "Rondônia", value: "RO" },
                { descricao: "Acre", value: "AC" },
                { descricao: "Amazonas", value: "AM" },
                { descricao: "Roraima", value: "RR" },
                { descricao: "Pará", value: "PA" },
                { descricao: "Amapá", value: "AP" },
                { descricao: "Tocantins", value: "TO" },
                { descricao: "Maranhão", value: "MA" },
                { descricao: "Piauí", value: "PI" },
                { descricao: "Ceará", value: "CE" },
                { descricao: "Rio Grande do Norte", value: "RN" },
                { descricao: "Paraíba", value: "PB" },
                { descricao: "Pernambuco", value: "PE" },
                { descricao: "Alagoas", value: "AL" },
                { descricao: "Sergipe", value: "SE" },
                { descricao: "Bahia", value: "BA" },
                { descricao: "Minas Gerais", value: "MG" },
                { descricao: "Espírito Santo", value: "ES" },
                { descricao: "Rio de Janeiro", value: "RJ" },
                { descricao: "São Paulo", value: "SP" },
                { descricao: "Paraná", value: "PR" },
                { descricao: "Santa Catarina", value: "SC" },
                { descricao: "Rio Grande do Sul", value: "RS" },
                { descricao: "Mato Grosso do Sul", value: "MS" },
                { descricao: "Mato Grosso", value: "MT" },
                { descricao: "Goiás", value: "GO" },
                { descricao: "Distrito Federal", value: "DF" }
            ]
        }
        return services
    })

export default CidadeFormService