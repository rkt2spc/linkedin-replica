/**
 * Created by nmtuan on 17-May-16.
 */
appControllers.controller('loginController', ['$scope','$rootScope', '$location',
    function ($scope, $rootScope, $location) {
        $scope.account = '';
        $scope.password = '';
        $scope.signIn = function () {
            FirebaseAdapter.signIn(
                $scope.account, 
                $scope.password,
                function (error, authData) {
                    if (error)
                        window.alert("Login Failed " + error);
                    else {
                        $rootScope.authData = authData;
                        $location.path("/main");
                        $scope.$apply();
                    }
            })
        };
        $scope.signUp = function () {
            FirebaseAdapter.signUp(
                $scope.account, 
                $scope.password,
                function (error, authData) {
                    if (error)
                        window.alert("Error creating account: " + error);
                    else
                        window.alert("Account created!");
                }
            )
        };
    }]);