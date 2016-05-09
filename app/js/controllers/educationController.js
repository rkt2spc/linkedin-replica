/**
 * Created by nmtuan on 28-Apr-16.
 */
appControllers.controller('educationController', ['$scope',
    function ($scope) {
        //Remove Education
        $scope.removeEducation = function (index) {
            $scope.education.splice(index, 1);
            FirebaseAdapter.set('education', angular.copy($scope.education));
        };

        //Add education
        $scope.showEducationAdd = false;
        $scope.educationAddShow = function () {
            $scope.educationAdd = {
                schoolName: '', schoolUrl: '', schoolLogo: '', degree: '', field: '',
                startPeriod: 'From', endPeriod: 'To'
            };
            $scope.showEducationAdd = true;
        };
        $scope.educationAddConfirm = function () {
            $scope.education.push($scope.educationAdd);
            FirebaseAdapter.set('education', angular.copy($scope.education));
            $scope.showEducationAdd = false;
        };

        //Edit Education
        $scope.educationEditShow = function (index) {
            $scope.educationEdit = JSON.parse(JSON.stringify($scope.education[index]));
            $scope.showEducationEdit[index] = true;
        };
        $scope.educationEditConfirm = function (index) {
            $scope.education[index] = $scope.educationEdit;
            FirebaseAdapter.set('education', angular.copy($scope.education));
        };
    }]);