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



