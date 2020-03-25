import angular from 'angular'
import {ExempleComponent} from './exemple/Exemple'
import {OtherComponent} from './other/Other'

const Modulos = 'modulos'
angular.module(Modulos, [])

.component('exemple', ExempleComponent)
.component('other', OtherComponent)

export default Modulos