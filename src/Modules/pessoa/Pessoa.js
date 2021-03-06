
import template from './Pessoa.html'

function PessoaController(PessoaService, $state) {
    self = this
    PessoaService.getAll()

    self.addPessoa = function () {
        $state.go('pessoa_adicionar')
    }

    self.editar = function (id) {
        $state.go('pessoa_editar', { id })
    }

    self.visualizar = function (visualizando) {
        $state.go('pessoa_visualizar', { visualizando })
    }

    self.voltarQuadro = function () {
        $state.go('home')
    }
}

export const PessoaComponent = {
    controller: PessoaController,
    controllerAs: 'ctrl',
    template
}