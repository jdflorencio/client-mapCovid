
import template from './PessoaForm.html'
import { MDCDialog } from '@material/dialog'

function PessoaController(PessoaFormService, $state, $stateParams) {
    self = this
    let urlParams = Number.isInteger(parseInt($stateParams.id))
    PessoaFormService.cidades()
    PessoaFormService.situacao()
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

    self.atulizar_situacao = function() {
        
        PessoaFormService.updateSituacao($stateParams.id)
    }

    self.modalRemove = function() {
        const dialog = new MDCDialog(document.querySelector('.removed-dialog'));
        dialog.open()
    }

    self.removed = function() {
        PessoaFormService.remove($stateParams.id)
    }

    self.modalSituacao = function() {
        const dialog = new MDCDialog(document.querySelector('.situacao-dialog'));
        dialog.open()
        
    }

    self.modalCidade = function() {
        const dialog = new MDCDialog(document.querySelector('.cidade-dialog'));
        dialog.open()
    }
}

export const PessoaForm = {
    controller: PessoaController,
    controllerAs: 'ctrl',
    template
}