/**
 * Created by nmtuan on 28-Apr-16.
 */
appControllers.controller('caredCausesController', ['$scope',
    function ($scope) {
        //Remove cause
        $scope.removeCause = function (index) {
            $scope.caredCauses.splice(index, 1);
        };

        //Add cause
        $scope.showCauseAdd = false;
        $scope.causeAddShow = function () {
            $scope.causeAdd = '';
            $scope.showCauseAdd = true;
        };
        $scope.causeAddConfirm = function () {
            $scope.caredCauses.push($scope.causeAdd);
            $scope.showCauseAdd = false;
        };
    }]);