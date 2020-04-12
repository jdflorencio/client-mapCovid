
import template from './PessoaForm.html'
import { MDCDialog } from '@material/dialog'

function PessoaController(PessoaFormService, $state, $stateParams) {
    self = this
    let parametroId

    self.exibir_view = {
        btn_salvar: false,
        btn_excluir: false,
        btn_editar: false,
        btn_alterar_cidade: false,
        btn_alterar_prontuario: false,
        input_nome_nascimento: false,
        select_cidade_main: false,
        div_cidade: true,
        div_prontuario: true

    }
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

            switch (tipo_visualizacao) {
                case "id":
                    self.title = "Editar Pessoa"
                    self.button_text = "Atualizar"
                    self.exibir_view.div_cidade = false
                    self.exibir_view.btn_salvar = true
                    self.exibir_view.div_prontuario = false
                    
                    break
                    case "visualizando":
                        self.title = "Visualizando Pessoa"
                        
                        self.exibir_view.btn_editar = true
                        self.exibir_view.btn_alterar_cidade = true
                        self.exibir_view.btn_alterar_prontuario = true
                        self.exibir_view.input_nome_nascimento = true
                        self.exibir_view.btn_excluir = true
                    

                    break
            }

            PessoaFormService.getOne(parametroId)
            break
        default:
            $state.go('pessoa_adicionar')


            self.title = "Adicionar Pessoa"
            self.button_text = "Salvar"
            self.exibir_view.btn_salvar = true
            self.exibir_view.select_cidade_main = true

    }

    self.option_modal = ''
    self.retornar = function () {
        $state.go('pessoa')
    }

    self.salvar = function () {
        const dialog = new MDCDialog(document.querySelector('.salved-dialog'));
        dialog.open()
    }

    self.editarCadastro = function () {
        $state.go('pessoa_editar', { id: parametroId })
    }

    self.confirmado = function () {
        if (self.button_text == "Atualizar") {
            return PessoaFormService.update(parametroId)

        } else if (self.button_text == "Salvar") {
            return PessoaFormService.add()
        }
    }

    self.atualizar_situacao = function () {

        PessoaFormService.updateSituacao(parametroId)
    }

    self.atualizar_cidade = function () {
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