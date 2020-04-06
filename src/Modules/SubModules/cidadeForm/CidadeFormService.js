const CidadeFormService = 'cidadeFormService'
angular.module(CidadeFormService, [])
    .factory('CidadeFormService', function ($http, API, $state, MainService) {
        const services = {}
        services.getOne = function (id) {
            return $http.get(`${API}/cidade/${id}`)
                .then(result => {
                    
                    self.cidade = result.data.dados
                })
                .catch(fail => {
                    console.log(fail)
                })
        }

        services.update = function(param) {
            return $http.put(`${API}/cidade/${param}`, self.cidade)
            .then(result => {
                MainService.notificacao(result.status, result.data.mensagem)
            })
            .catch( fail => {
                MainService.notificacao(fail.status, fail.data.mensagem)
            })
        }

        services.add = function() {
            return $http.post(`${API}/cidade`, self.cidade)
            .then( result => {
                MainService.notificacao(result.status, result.data.mensagem)
                $state.go('cidade_editar', {id: result.data.dados})
            })
            .catch( fail => {
                self.error = {
                    path: fail.data.error[0],
                    message: fail.data.error[1]
                }                
                console.log(fail.data)
            })
        }

        services.remove = function(param) {
            return $http.delete(`${API}/cidade/${param}`)
            .then( result => {
                $state.go('cidade')
                MainService.notificacao(result.status, "Removido sucesso!")
            })
            .catch ( fail => {
                MainService.notificacao(fail.status, fail.data.mensagem)
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