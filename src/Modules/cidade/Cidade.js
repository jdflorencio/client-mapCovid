
import template from './Cidade.html'

function CidadeController($http, CidadeService) {
    self = this
    CidadeService.getAll()
    

}

export const CidadeComponent = {
    controller: CidadeController,
    controllerAs: 'ctrl',
    template
}