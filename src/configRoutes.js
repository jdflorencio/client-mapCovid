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
    .state('pessoa', {

        url: '/pessoa',
        component: 'pessoa'
    })
    .state('pessoa_editar', {
        url: '/pessoa/{id}',
        component: 'pessoaForm'
    })
    .state('pessoa_adicionar', {
        url: '/pessoa/nova',
        component: 'pessoaForm'
    })

}

export default configRoute