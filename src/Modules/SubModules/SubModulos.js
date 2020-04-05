import angular from 'angular'
import {CidadeForm} from './cidadeForm/CidadeForm'

/* SERVICES */

import CidadeFormService from './cidadeForm/CidadeFormService'

const SubModulos = 'submodel'
angular.module(SubModulos, [CidadeFormService])

.component('cidadeForm', CidadeForm)

export default SubModulos