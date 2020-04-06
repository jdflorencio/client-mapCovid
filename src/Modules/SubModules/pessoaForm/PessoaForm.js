
import template from './PessoaForm.html'
import { MDCDialog } from '@material/dialog'

function PessoaController(PessoaFormService, $state, $stateParams) {
    self = this
    let urlParams = Number.isInteger(parseInt($stateParams.id))
    PessoaFormService.ufs()
    switch (urlParams) {
        case true:
            self.title = "Editar Pessoa"
            self.button_text = "Atualizar"
            PessoaFormService.getOne($stateParams.id)
            break
        default:
            $state.go('pessoa_adicionar')
            self.title = "Adicionar Pessoa"
            self.button_text = "Salvar"

    }

    self.option_modal = ''
    self.retornar = function() {
        $state.go('pessoa')
    }

    self.salvar = function() {
        const dialog = new MDCDialog(document.querySelector('.salved-dialog'));
        dialog.open()
    }

    self.confirmado = function() {
       if(self.button_text == "Atualizar") {
           return PessoaFormService.update($stateParams.id)

       } else if (self.button_text == "Salvar") {
           return PessoaFormService.add()
       }
    }

    self.modalRemove = function() {
        const dialog = new MDCDialog(document.querySelector('.removed-dialog'));
        dialog.open()
    }

    self.removed = function() {
        PessoaFormService.remove($stateParams.id)
    }
}

export const PessoaForm = {
    controller: PessoaController,
    controllerAs: 'ctrl',
    template
}