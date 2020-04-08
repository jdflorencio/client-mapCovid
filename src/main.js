import angular from 'angular'
import '@uirouter/angularjs'
import './main.scss'
import Modulos from './Modules/Modulos'
import configRoute from './configRoutes'
import 'ng-notify'
import MainService from './main.services'
import 'angular-input-masks/br'



export const app = 'app'
angular.module('app',  [
    'ui.router',
    'ngNotify',
    'ui.utils.masks',
    MainService,
    Modulos
    
])
.constant('API', 'http://127.0.0.1:3333')
.config(configRoute)
.factory('FormatToAPI', function () {
    return {
      dateFormat: function (date) {

        const formatoBrasileiro = RegExp('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}$')
        const formatoIngles = RegExp('^[12][0-9]{3}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$')
        if (formatoBrasileiro.test(date)) {
          return date.split('/').reverse().join('-')
        } else if (formatoIngles.test(date)) {
          return date.split('-').reverse().join('/')
        }
      }
    }
})