
import template from './Cidade.html'

function CidadeController($http, CidadeService, $state) {
    self = this
    CidadeService.getAll()

    self.addCidade = function() {
        $state.go('cidade_adicionar')
    }

}

export const CidadeComponent = {
    controller: CidadeController,
    controllerAs: 'ctrl',
    template
}