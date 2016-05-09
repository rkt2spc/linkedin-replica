/**
 * Created by nmtuan on 28-Apr-16.
 */
appControllers.controller('profileController', ['$scope',
    function ($scope) {
        //Edit Profile Image
        $scope.showProfileImageEdit = false;
        $scope.profileImageEditShow = function () {
            $scope.profileImageEdit = $scope.profileImage;
            $scope.showProfileImageEdit = true;
        };
        $scope.profileImageEditConfirm = function () {
            FirebaseAdapter.set('profileImg', $scope.profileImageEdit);
            $scope.showProfileImageEdit = false;
        };

        //Edit Name
        $scope.showNameEdit = false;
        $scope.nameEditShow = function () {
            $scope.firstnameEdit = $scope.name[0];
            $scope.lastnameEdit = $scope.name[1];
            $scope.showNameEdit = true;
        };
        $scope.nameEditConfirm = function () {
            $scope.name[0] = $scope.firstnameEdit;
            $scope.name[1] = $scope.lastnameEdit;
            FirebaseAdapter.set('name', angular.copy($scope.name));
            $scope.showNameEdit = false;
        };

        //Edit Headline
        $scope.showHeadlineEdit = false;
        $scope.headlineEditShow = function () {
            $scope.headlineEdit = $scope.headline;
            $scope.showHeadlineEdit = true;
        };
        $scope.headlineEditConfirm = function () {
            FirebaseAdapter.set('headline', angular.copy($scope.headlineEdit));
            $scope.showHeadlineEdit = false;
        };

        //Edit Demographic
        $scope.showDemographicEdit = false;
        $scope.demographicEditShow = function () {
            $scope.workareaEdit = $scope.workInfo.area;
            $scope.workindustryEdit = $scope.workInfo.industry;
            $scope.showDemographicEdit = true;
        };
        $scope.demographicEditConfirm = function () {
            $scope.workInfo.area = $scope.workareaEdit;
            $scope.workInfo.industry = $scope.workindustryEdit;
            FirebaseAdapter.set('workInfo', angular.copy($scope.workInfo));
            $scope.showDemographicEdit = false;
        };
    }]);
