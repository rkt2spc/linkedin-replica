/**
 * Created by nmtuan on 28-Apr-16.
 */
appControllers.controller('supportedOrganizationController', ['$scope',
    function ($scope) {
        //Remove organization
        $scope.removeOrganization = function (index) {
            $scope.supportedOrganizations.splice(index, 1);
        };

        //Add organization
        $scope.showOrganizationAdd = false;
        $scope.organizationAddShow = function () {
            $scope.organizationAdd = {
                orgName: '', orgWebsite: ''
            };
            $scope.showOrganizationAdd = true;
        };
        $scope.organizationAddConfirm = function () {
            $scope.supportedOrganizations.push($scope.organizationAdd);
            $scope.showOrganizationAdd = false;
        };
    }]);