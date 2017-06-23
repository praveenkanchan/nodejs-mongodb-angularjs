var mainmodule = angular.module('app', ['ngRoute']);

// Configer page URL
mainmodule.config(function($locationProvider, $routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './js/pages/index.html',
            controller: 'IndexCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Controller for list, add, edit and delete users details
mainmodule.controller('IndexCtrl', function($scope, $http, apiCall) { 
    
    // Get user list 
    $scope.list = function(){
        $scope.page = 'list';
        apiCall.getUserList().then(function(response) {
            $scope.userList = response.data;
        });
    }
    $scope.list();

    // Show page for add new user
    $scope.addView = function() {
        $scope.page = 'add';
        $scope.editDetails = {
            "name": '',
            "instrument": ''
        };
    }

    // Show page for update user details
    $scope.editView = function(details){
        $scope.page = 'edit';
        $scope.editDetails = details;
    }
    
    // Add/Update user details using API
    $scope.addUpdateUserDetails = function(details){
        var update_form = {
            "name": details.name,
            "instrument": details.instrument
        };
        if(details._id){
            apiCall.updateUser(details._id, update_form).then(function(response) {
                if(response.data.status == 200){
                    $scope.list();
                    $scope.page = 'list';
                }
            });
        } else {
            apiCall.addUser(update_form).then(function(response) {
                if(response.data.status == 200){
                    $scope.list();
                    $scope.page = 'list';
                }
            });
        }
    }

    // Delete user
    $scope.delete = function(id){
        apiCall.deleteUser(id).then(function(response) {
            if(response.data.status == 200){
                $scope.list();
                $scope.page = 'list';
            }
        });
    }
});

 