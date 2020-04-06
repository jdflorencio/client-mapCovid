
import template from './Pessoa.html'

function PessoaController(PessoaService, $state) {
    self = this
    PessoaService.getAll()

    self.addPessoa = function() {
        $state.go('pessoa_adicionar')
    }

    self.editar = function(id) {
        $state.go('pessoa_editar', {id})
    }
}

export const PessoaComponent = {
    controller: PessoaController,
    controllerAs: 'ctrl',
    template
}