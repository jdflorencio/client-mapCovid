const MainService = 'mainService'
angular.module(MainService, [])
.factory('MainService', ['$state', 'ngNotify', function( $state, ngNotify ){
    const appService = {}

    appService.notificacao = function(resp, message) {

        switch(resp) {
            case 200:
                
                ngNotify.set(` ${message} :)`, {
                    type: 'success',
                    theme: 'pastel'
                });
                break
            case 201: 
            case 401:
                ngNotify.set(`${message}`, {
                    type: 'error',
                });
                break
            case 403:
                ngNotify.set(`${message}`, {
                    type: 'warn',
                });
                break
            case 412:
                ngNotify.set(`${message} :(`, {
                    type: 'warn',
                });
                break
            case 204:
            default:                
                ngNotify.set(`Erro inesperado :(`, {
                    type: 'error',
                });
        }
    }
    return appService

}])


export default MainService