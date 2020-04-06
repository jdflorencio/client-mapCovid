const PessoaFormService = 'pessoaFormService'
angular.module(PessoaFormService, [])
    .factory('PessoaFormService', function ($http, API, $state, MainService, $filter) {
        const services = {}
        services.getOne = function (id) {
            return $http.get(`${API}/pessoa/${id}`)
                .then(result => {
                    result.data.dados.data_nascimento = $filter('date')(result.data.dados.data_nascimento, 'dd/MM/yyyy')
                    result.data.dados.prontuario.map(prontuario => {


                        if (prontuario.situacao == 1) {
                            prontuario.situacao = "Casos Suspeito"
                        }

                        if (prontuario.situacao == 2) {
                            prontuario.situacao = "Casos análise"
                        }

                        if (prontuario.situacao == 3) {
                            prontuario.situacao = "Casos confirmado"
                        }

                        if (prontuario.situacao == 4) {
                            prontuario.situacao = "Descartado"
                        }
                    })
                    self.pessoa = result.data.dados
                })
                .catch(fail => {
                    MainService.notificacao()
                })
        }


        services.cidades = function () {
            $http.get(`${API}/cidade`)
                .then(result => {
                    self.cidades = result.data.dados
                })
                .catch(fail => {
                    MainService.notificacao()
                })
        }

        services.update = function (param) {
            return $http.put(`${API}/pessoa/${param}`, self.pessoa)
                .then(result => {
                    MainService.notificacao(result.status, result.data.mensagem)
                })
                .catch(fail => {
                    self.error = {
                        path: fail.data.error[0],
                        message: fail.data.error[1]
                    }
                    MainService.notificacao(fail.status, fail.data.mensagem)
                })
        }

        services.add = function () {
            return $http.post(`${API}/pessoa`, self.pessoa)
                .then(result => {
                    MainService.notificacao(result.status, result.data.mensagem)
                    $state.go('pessoa_editar', { id: result.data.dados })
                })
                .catch(fail => {
                    self.error = {
                        path: fail.data.error[0],
                        message: fail.data.error[1]
                    }
                    MainService.notificacao(fail.status, fail.data.mensagem)
                })
        }

        services.remove = function (param) {
            return $http.delete(`${API}/pessoa/${param}`)
                .then(result => {
                    $state.go('pessoa')
                    MainService.notificacao(result.status, "Removido sucesso!")
                })
                .catch(fail => {
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

export default PessoaFormService