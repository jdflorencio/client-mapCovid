
import template from './CidadeForm.html'
import { MDCDialog } from '@material/dialog'

function CidadeController(CidadeFormService, $state, $stateParams) {
    self = this
    let urlParams = Number.isInteger(parseInt($stateParams.id))
    CidadeFormService.ufs()
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

    self.option_modal = ''
    self.retornar = function() {
        $state.go('cidade')
    }

    self.salvar = function() {
        const dialog = new MDCDialog(document.querySelector('.salved-dialog'));
        dialog.open()
    }

    self.confirmado = function() {
       if(self.button_text == "Atualizar") {
           return CidadeFormService.update($stateParams.id)

       } else if (self.button_text == "Salvar") {
           return CidadeFormService.add()
       }
    }

    self.modalRemove = function() {
        const dialog = new MDCDialog(document.querySelector('.removed-dialog'));
        dialog.open()
    }

    self.removed = function() {
        CidadeFormService.remove($stateParams.id)
    }
}

export const CidadeForm = {
    controller: CidadeController,
    controllerAs: 'ctrl',
    template
}