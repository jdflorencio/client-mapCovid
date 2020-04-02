
import template from './Home.html'

function HomeController($http, HomeService, $state) {
    self = this
    HomeService.getAll()
    
    self.buscar = function() {
        console.log('clicou')
    }
}

export const HomeComponent = {
    controller: HomeController,
    controllerAs: 'ctrl',
    template
}