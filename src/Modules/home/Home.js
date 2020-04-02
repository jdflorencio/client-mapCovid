
import template from './Home.html'

function HomeController($http, HomeService, $state) {
    self = this
    HomeService.getAll()
    
    self.verCidades = function(){
        $state.go('')
    }
}

export const HomeComponent = {
    controller: HomeController,
    controllerAs: 'ctrl',
    template
}