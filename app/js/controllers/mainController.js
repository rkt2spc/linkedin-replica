/**
 * Created by nmtuan on 28-Apr-16.
 */
appControllers.controller('mainController', ['$scope','$http', '$location', '$anchorScroll',
    function ($scope, $http, $location, $anchorScroll) {
        window.sc = $scope;
        $scope.scrollTo = function (id) {
            var old = $location.hash();
            $location.hash(id);
            $anchorScroll();
            $location.hash(old);
        };

        FirebaseAdapter.setup('https://1312663webmidterm.firebaseio.com/user');
        FirebaseAdapter.bind(null, function (snapshot) {
            var data = snapshot.val();

            $scope.coverImage = data.coverImg;
            $scope.profileImage = data.profileImg;
            $scope.name = data.name;
            $scope.headline = data.headline;
            $scope.workInfo = data.workInfo;
            $scope.isInfluencer = data.isInfluencer;
            $scope.followers = data.followers;
            $scope.profileUrl = data.profileUrl;

            $scope.postsUrl = data.postsUrl;
            $scope.posts = (data.posts != undefined)? data.posts : [];

            $scope.summary = data.summary;

            $scope.experience = (data.experience != undefined)? data.experience : [];
            $scope.showExperienceEdit = new Array(data.experience.length).fill(false);

            $scope.caredCauses = (data.caredCauses != undefined)? data.caredCauses : [];
            $scope.supportedOrganizations = (data.supportedOrganizations != undefined)? data.supportedOrganizations : [];

            $scope.skills = (data.skills != undefined)? data.skills : [];

            $scope.education = (data.education != undefined)? data.education : [];
            $scope.showEducationEdit = new Array(data.education.length).fill(false);

            $scope.$apply()
        });

        // $http.get('data.json').success(function (data) {
        //     //Read model from json data
        //     $scope.coverImage = data.coverImg;
        //     $scope.profileImage = data.profileImg;
        //     $scope.name = data.name;
        //     $scope.headline = data.headline;
        //     $scope.workInfo = data.workInfo;
        //     $scope.isInfluencer = data.isInfluencer;
        //     $scope.followers = data.followers;
        //     $scope.profileUrl = data.profileUrl;
        //
        //     $scope.postsUrl = data.postsUrl;
        //     $scope.posts = data.posts;
        //
        //     $scope.summary = data.summary;
        //
        //     $scope.experience = data.experience;
        //     $scope.showExperienceEdit = new Array(data.experience.length).fill(false);
        //
        //     $scope.caredCauses = data.caredCauses;
        //     $scope.supportedOrganizations = data.supportedOrganizations;
        //     $scope.skills = data.skills;
        //
        //     $scope.education = data.education;
        //     $scope.showEducationEdit = new Array(data.education.length).fill(false);
        // });
    }]);