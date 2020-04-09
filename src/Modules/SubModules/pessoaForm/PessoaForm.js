
import template from './PessoaForm.html'
import { MDCDialog } from '@material/dialog'

function PessoaController(PessoaFormService, $state, $stateParams) {
    self = this
    let parametroId 

    const urlParams = Number.isInteger(parseInt($stateParams.id))
        || Number.isInteger(parseInt($stateParams.visualizando))

    const tipo_visualizacao = Object.keys($stateParams)
        .find(param => {
            return param == "id" || param == "visualizando"
        })

    PessoaFormService.cidades()
    PessoaFormService.situacao()

    switch (urlParams) {
        case true:
            parametroId = $stateParams[tipo_visualizacao]
            console.log('>>>>', parametroId)       

            switch (tipo_visualizacao) {
                case "id":
                    self.title = "Editar Pessoa"
                    self.button_text = "Atualizar"
                    self.editar = true
                    break
                case "vizualizando":
                    self.title = "Editar Pessoa"
                    self.editar = false
                    break

            }

            PessoaFormService.getOne(parametroId)
            break
        default:
            // $state.go('pessoa_adicionar')
            self.title = "Adicionar Pessoa"
            self.button_text = "Salvar"
    }

    self.option_modal = ''
    self.retornar = function () {
        $state.go('pessoa')
    }

    self.salvar = function () {
        const dialog = new MDCDialog(document.querySelector('.salved-dialog'));
        dialog.open()
    }

    self.confirmado = function () {
        if (self.button_text == "Atualizar") {
            return PessoaFormService.update(parametroId)

        } else if (self.button_text == "Salvar") {
            return PessoaFormService.add()
        }
    }

    self.atulizar_situacao = function () {

        PessoaFormService.updateSituacao(parametroId)
    }

    self.atualizar_cidade = function() {
        PessoaFormService.updateCidade(parametroId)
    }

    self.modalRemove = function () {
        const dialog = new MDCDialog(document.querySelector('.removed-dialog'));
        dialog.open()
    }

    self.removed = function () {
        PessoaFormService.remove(parametroId)
    }

    self.modalSituacao = function () {
        const dialog = new MDCDialog(document.querySelector('.situacao-dialog'));
        dialog.open()

    }

    self.modalCidade = function () {
        const dialog = new MDCDialog(document.querySelector('.cidade-dialog'));
        dialog.open()
    }
}

export const PessoaForm = {
    controller: PessoaController,
    controllerAs: 'ctrl',
    template
}