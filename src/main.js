import angular from 'angular'
import '@uirouter/angularjs'
import 'material-design-lite'
import 'material-design-lite/material'
import { MainController } from './app.controller'
import router from './configRoutes'
// import { MDCRipple } from '@material/ripple/index'

// const ripple = new MDCRipple(document.querySelector('.foo-button'))

var materialApp = angular
.module('materialApp',  [
    router
])
.constant('API', 'http://127.0.0.1:3333/')
// .config(routesConfig)
.controller('appCtrl', function(){
    console.warn('DENTRO DO CONTROLLER PRINCIPAL')
})


