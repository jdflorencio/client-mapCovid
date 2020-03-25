


var router = angular.module('materialApp.routes', ['ui.router']);
/* ngInjector */
router.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $injector) {

    $urlRouterProvider.otherwise('/login');

    $httpProvider.interceptors.push(($injector) => {
        return {
            request: function (req) {
                req.headers.Authorization = 'Bearer ' + localStorage.getItem("Authorization")
                return req
            },
            responseError: function (error) {

                const { status } = error

                switch (status) {
                    case 401:
                        localStorage.removeItem('Authorization')
                        var state = $injector.get('$state')
                        state.go('login')
                        break
                    case 403:
                        console.info('atual URL:', window.location)
                        // console.info('atual URL:', $stateProvider)
                        break
                }
                return
            },
            requestError: function (err) {
                console.warn(" ||| aqui >>>", err)
            }
        }

    })

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/modules/login/views/login.html',
            controller: 'loginCtrl',
            controllerAs: 'ctrl',
            params: {
                title: "SimpleERP"
            },
            resolve: {
                skipIfAuthenticated: function (AppService) {
                    teste = AppService.notAuthenticated()

                }
            }
        })

        
    $locationProvider.html5Mode(true);
});


function _skipIfAuthenticated() {

}

function _redirectIfNotAuthenticated() {
    console.log('Não Autenticado')
}



export default router







// export default routesConfig;

// /* @ngInject */
// function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $injector) {

//     $urlRouterProvider.otherwise('/');

//     $httpProvider.interceptors.push(($injector) => {
//         return {
//             request: function (req) {
//                 req.headers.Authorization = 'Bearer ' + localStorage.getItem("Authorization")
//                 return req
//             },
//             responseError: function (error) {

//                 const { status } = error

//                 switch (status) {
//                     case 401:
//                         localStorage.removeItem('Authorization')
//                         var state = $injector.get('$state')
//                         state.go('login')
//                         break
//                     case 403:
//                         console.info('atual URL:', window.location)
//                         // console.info('atual URL:', $stateProvider)
//                         break
//                 }
//                 return
//             },
//             requestError: function (err) {
//                 console.warn(" ||| aqui >>>", err)
//             }
//         }

//     })

//     $stateProvider
//         .state('home', {
//             url: '/',
//             component: ''
//             // templateUrl: '/modules/login/views/login.html',
//             // controller: 'loginCtrl',
//             // controllerAs: 'ctrl',
//             // params: {
//             //     title: "SimpleERP"
//             // },
//             // resolve: {
//             //     skipIfAuthenticated: function (AppService) {
//             //         teste = AppService.notAuthenticated()

//             //     }
//             // }
//         })
//     $locationProvider.html5Mode(true);
// }


// function _skipIfAuthenticated() {

// }

// function _redirectIfNotAuthenticated() {
//     console.log('Não Autenticado')
// }

