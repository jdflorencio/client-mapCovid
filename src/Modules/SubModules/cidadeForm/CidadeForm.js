
import template from './CidadeForm.html'

function CidadeController($http, CidadeService) {
    self = this
    CidadeService.getAll()
    

}

export const CidadeForm = {
    controller: CidadeController,
    controllerAs: 'ctrl',
    template
}