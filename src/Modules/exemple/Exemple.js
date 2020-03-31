import template from './Exemple.html'
// import './'
import './Exemple.scss'

class ExempleController {
    
    constructor() {
        this.name = "João diego"    
    }

}

export const ExempleComponent = {
    controller: ExempleController,
    controllerAs: 'ctrl', 
    template
    
    
}