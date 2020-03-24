import angular from 'angular'
import '@uirouter/angularjs'
import 'material-design-lite'
import 'material-design-lite/material'
// import { MDCRipple } from '@material/ripple/index'

// const ripple = new MDCRipple(document.querySelector('.foo-button'))


var materialApp = angular
.module('materialApp',  [   
])
.controller('appCtrl', function(){
    console.warn('DENTRO DO CONTROLLER PRINCIPAL')
})