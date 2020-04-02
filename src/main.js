import angular from 'angular'
import '@uirouter/angularjs'
import './main.scss'
import Modulos from './Modules/Modulos'
import configRoute from './configRoutes'


export const app = 'app'
angular.module('app',  [
    'ui.router',
    Modulos,
    
])
.constant('API', 'http://127.0.0.1:3333')
.config(configRoute)

