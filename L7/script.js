const app = angular.module('app', [])
    app.controller('personCtrl', ($scope) => {
        $scope.firstName = 'Mooncake'
        $scope.lastName = 'DeepSpace'
        $scope.fullName = () => {
            return `${ $scope.firstName} ${ $scope.lastName}`
        }
})

