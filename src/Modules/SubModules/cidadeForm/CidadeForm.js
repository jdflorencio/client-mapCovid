
import template from './CidadeForm.html'
import { MDCDialog } from '@material/dialog';


function CidadeController(CidadeFormService, $state, $stateParams,  $scope) {
    self = this
    
    $scope.error ="OBs asdasdasd "
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

    const dialog = function() {
        const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
        dialog.open()
        
    }

    self.confirmado = function(param){
        console.log(">>>", param)
    }
    
    self.salvar = function() {
        dialog()
        
    }
    
}

export const CidadeForm = {
    controller: CidadeController,
    controllerAs: 'ctrl',
    template
}