const PessoaFormService = 'pessoaFormService'
angular.module(PessoaFormService, [])
    .factory('PessoaFormService', function ($http, API, $state, MainService, $filter, FormatToAPI, $window) {
        const services = {}
        services.getOne = function (id) {
            return $http.get(`${API}/pessoa/${id}`)
                .then(result => {

                    const table = {
                        1: "Caso Suspeito",
                        2: "Caso em Análise",
                        3: "Caso Confirmado",
                        4: "Caso Descartado",
                    }

                    result.data.dados.data_nascimento = $filter('date')(result.data.dados.data_nascimento, 'dd/MM/yyyy')
                    result.data.dados.prontuario.map(prontuario => {

                        prontuario.situacao = table[prontuario.situacao]

                    })
                    self.pessoa = result.data.dados
                    self.situacao_current = self.pessoa.situacao
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
                    console.log(fail)
                })
        }

        services.update = function (param) {
            self.pessoa.data_nascimento = FormatToAPI.dateFormat(self.pessoa.data_nascimento)
            return $http.put(`${API}/pessoa/${param}`, self.pessoa)
                .then(result => {
                    MainService.notificacao(result.status, result.data.mensagem)
                    services.getOne(param)
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

        services.updateSituacao = function (param) {
            return $http.put(`${API}/pessoa/${param}/situacao`, { situacao: self.pessoa.situacao, anterior: self.situacao_current, uf: self.pessoa.cidade.uf })
                .then(result => {
                    // $state.go('pessoa_editar',  { id: param })
                    // $window.location.reload()
                    services.getOne(param)
                    MainService.notificacao(result.status, result.data.mensagem)
                })
                .catch(fail => {
                    MainService.notificacao(fail.status, fail.data.mensagem)
                })

        }
        services.situacao = function () {
            self.situacao = [
                { situacao: "1", descricao: "Suspeito" },
                { situacao: "2", descricao: "Em Análise" },
                { situacao: "3", descricao: "Confirmado" },
                { situacao: "4", descricao: "Descartado" },
            ]

        }

        return services
    })

export default PessoaFormService