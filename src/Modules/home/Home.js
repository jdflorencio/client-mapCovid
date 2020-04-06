
import template from './Home.html'

function HomeController($http, HomeService, $state) {
    self = this
    HomeService.getAll()
    
    self.verCidades = function(){
        $state.go('cidade')

    }

    self.verPessoas = function(){
        $state.go('pessoa')

    }
}

export const HomeComponent = {
    controller: HomeController,
    controllerAs: 'ctrl',
    template
}