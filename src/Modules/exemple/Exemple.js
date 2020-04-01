import template from './Exemple.html'
// import './'
import './Exemple.scss'
import { MDCDialog } from '@material/dialog';
// import { list } from 'material-components-web';


class ExempleController {

    constructor() {
        'ngInject'
        this.name = "João diego"
    }

    dialog() {
        const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
        dialog.open()

    }



}

export const ExempleComponent = {
    controller: ExempleController,
    controllerAs: 'ctrl',
    template


}