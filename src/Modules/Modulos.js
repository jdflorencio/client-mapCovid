import angular from 'angular'
import {HomeComponent} from './home/Home'
import {ExempleComponent} from './exemple/Exemple'
import {OtherComponent} from './other/Other'

const Modulos = 'modulos'
angular.module(Modulos, [])
.component('home', HomeComponent)
.component('exemple', ExempleComponent)
.component('other', OtherComponent)

export default Modulos