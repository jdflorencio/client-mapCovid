import angular from 'angular'
import {HomeComponent} from './home/Home'
import {ExempleComponent} from './exemple/Exemple'
import {OtherComponent} from './other/Other'

/* SERVICES */
import HomeService from './home/HomeService'

const Modulos = 'modulos'
angular.module(Modulos, [
    HomeService
])
.component('home', HomeComponent)
.component('exemple', ExempleComponent)
.component('other', OtherComponent)


export default Modulos