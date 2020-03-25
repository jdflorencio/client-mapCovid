/* @ngInject */
function configRoute($stateProvider, $urlRouterProvider, $locationProvider){
    // $locationProvider.html5Mode(true).hashPrefix('!')
    $urlRouterProvider.otherwise('/')
    $stateProvider
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