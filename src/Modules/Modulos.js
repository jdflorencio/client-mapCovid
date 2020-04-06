import angular from 'angular'
import {HomeComponent} from './home/Home'
import {CidadeComponent} from './cidade/Cidade'
import {PessoaComponent} from './pessoa/Pessoa'


import SubModulos from './SubModules/SubModulos'
/* SERVICES */
import HomeService from './home/HomeService'
import CidadeService from './cidade/CidadeService'
import PessoaService from './pessoa/PessoaService'

const Modulos = 'modulos'
angular.module(Modulos, [
    HomeService,
    CidadeService,
    PessoaService,    
    SubModulos
])
.component('home', HomeComponent)
.component('cidade', CidadeComponent)
.component('pessoa', PessoaComponent)


export default Modulos