import template from './Home.html'

import {MDCTopAppBar} from '@material/top-app-bar';

class HomeController {
    constructor() {
       console.warn("MODULO HOME")
        this.name = "Home"

        
        
    }

    
}

export const HomeComponent = {
    controller: HomeController,
    controllerAs: 'ctrl',
    template
}