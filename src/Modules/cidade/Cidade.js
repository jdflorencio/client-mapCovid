
import template from './Cidade.html'

function CidadeController(CidadeService, $state) {
    self = this
    CidadeService.getAll()

    self.addCidade = function () {
        $state.go('cidade_adicionar')
    }

    self.editar = function (id) {
        $state.go('cidade_editar', { id })
    }

    self.voltarQuadro = function () {
        $state.go('home')
    }
}

export const CidadeComponent = {
    controller: CidadeController,
    controllerAs: 'ctrl',
    template
}