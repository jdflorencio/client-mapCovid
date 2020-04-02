import angular from 'angular'
import {HomeComponent} from './home/Home'
import {CidadeComponent} from './cidade/Cidade'
import {ExempleComponent} from './exemple/Exemple'
import {OtherComponent} from './other/Other'

/* SERVICES */
import HomeService from './home/HomeService'
import CidadeService from './cidade/CidadeService'

const Modulos = 'modulos'
angular.module(Modulos, [
    HomeService,
    CidadeService
])
.component('home', HomeComponent)
.component('cidade', CidadeComponent)
.component('exemple', ExempleComponent)
.component('other', OtherComponent)


export default Modulos