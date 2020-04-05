
import template from './CidadeForm.html'

function CidadeController(CidadeFormService, $state, $stateParams) {
    self = this
    let urlParams = Number.isInteger(parseInt($stateParams.id))
    CidadeFormService.ufs()
    self.nome = 'teste'
    switch (urlParams) {
        case true:
            self.title = "Editar Cidade"
            self.button_text = "Atualizar"
            CidadeFormService.getOne($stateParams.id)
            break
        default:
            $state.go('cidade_adicionar')
            self.title = "Adicionar Cidade"
            self.button_text = "Salvar" 
    }
    self.retornar = function () {
        $state.go('cidade')
    }
}

export const CidadeForm = {
    controller: CidadeController,
    controllerAs: 'ctrl',
    template
}