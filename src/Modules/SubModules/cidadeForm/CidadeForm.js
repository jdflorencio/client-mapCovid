
import template from './CidadeForm.html'
import { MDCDialog } from '@material/dialog'

function CidadeController(CidadeFormService, $state, $stateParams) {
    self = this
    let parametroId

    self.exibir_view = {
        btn_editar: false,
        btn_salvar: false,
        btn_excluir: false,
        inputs: true

    }

    CidadeFormService.ufs()

    const urlParams = Number.isInteger(parseInt($stateParams.id))
        || Number.isInteger(parseInt($stateParams.visualizando))

    const tipo_visualizacao = Object.keys($stateParams)
        .find(param => {
            return param == "id" || param == "visualizando"
        })

    switch (urlParams) {
        case true:
            parametroId = $stateParams[tipo_visualizacao]

            switch (tipo_visualizacao) {
                case "id":
                    self.title = "Editar Cidade"
                    self.button_text = "Atualizar"
                    self.exibir_view.btn_salvar = true
                    self.exibir_view.inputs = false

                    break
                case "visualizando":
                    self.title = "Visualizado o cadastro de cidades"
                    self.exibir_view.btn_editar = true
                    self.exibir_view.btn_excluir = true

                    break
            }
            CidadeFormService.getOne(parametroId)
            break
        default:
            $state.go('cidade_adicionar')
            self.exibir_view.btn_salvar = true
            self.exibir_view.inputs = false
            self.title = "Adicionar Cidade"
            self.button_text = "Salvar"

    }

    self.option_modal = ''
    self.retornar = function () {
        $state.go('cidade')
    }

    self.salvar = function () {
        const dialog = new MDCDialog(document.querySelector('.salved-dialog'));
        dialog.open()
    }

    self.confirmado = function () {
        if (self.button_text == "Atualizar") {
            return CidadeFormService.update(parametroId)

        } else if (self.button_text == "Salvar") {
            return CidadeFormService.add()
        }
    }

    self.modalRemove = function () {
        const dialog = new MDCDialog(document.querySelector('.removed-dialog'));
        dialog.open()
    }

    self.removed = function () {
        CidadeFormService.remove(parametroId)
    }

    self.editar = function () {
        $state.go('cidade_editar', { id: parametroId })
    }
}

export const CidadeForm = {
    controller: CidadeController,
    controllerAs: 'ctrl',
    template
}