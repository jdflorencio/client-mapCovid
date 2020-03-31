import template from './Home.html'
// import './'
import './Home.scss'

class HomeController {
    
    constructor() {
        this.name = "Home"    
    }

}

export const HomeComponent = {
    controller: HomeController,
    controllerAs: 'ctrl', 
    template
    
    
}