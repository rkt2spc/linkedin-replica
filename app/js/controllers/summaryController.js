/**
 * Created by nmtuan on 28-Apr-16.
 */
appControllers.controller('summaryController', ['$scope',
    function ($scope) {
        //Edit Summary
        $scope.showSummaryEdit = false;
        $scope.summaryEditShow = function () {
            $scope.summaryEdit = $scope.summary;
            $scope.showSummaryEdit = true;
        };
        $scope.summaryEditConfirm = function () {
            FirebaseAdapter.set('summary', angular.copy($scope.summaryEdit));
            $scope.showSummaryEdit = false;
        };
    }]);