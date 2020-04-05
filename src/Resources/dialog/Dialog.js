import template from './Dialog.html'
import { MDCDialog } from '@material/dialog';

function dialog() {
    const x = document.querySelector('.mdc-dialog')
    console.info(x)
    // const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

    return {
        template,
        restrict: "E",
        scope: {
            title: '@',
            error: '=message'

        }
    }

}

export default dialog