import angular from 'angular'
import {CidadeForm} from './cidadeForm/CidadeForm'
import {PessoaForm} from './pessoaForm/PessoaForm'
/* SERVICES */

import CidadeFormService from './cidadeForm/CidadeFormService'
import PessoaFormService from './pessoaForm/PessoaFormService'

const SubModulos = 'submodel'
angular.module(SubModulos, [
    CidadeFormService,
    PessoaFormService
])

.component('cidadeForm', CidadeForm)
.component('pessoaForm', PessoaForm)

export default SubModulos