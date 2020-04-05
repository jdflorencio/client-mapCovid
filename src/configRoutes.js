/* @ngInject */
function configRoute($stateProvider, $urlRouterProvider){
    // $locationProvider.html5Mode(true).hashPrefix('!')
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('home', {
        url: '/',
        component: 'home'
    })
    .state('cidade', {

        url: '/cidade',
        component: 'cidade'
    })
    .state('cidade_editar', {
        url: '/cidade/{id}',
        component: 'cidadeForm'
    })
    .state('cidade_adicionar', {
        url: '/cidade/nova',
        component: 'cidadeForm'
    })
    .state('teste', {
        url: '/exemple',
        component: 'exemple'
    })
    .state('aqui', {
        url:'/other',
        component: 'other'
    })

}

export default configRoute