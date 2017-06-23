var mainmodule = angular.module('app');

// Create factory for call API
mainmodule.factory('apiCall', ['$http', function($http) {

    // Default URL
    var urlBase = 'http://localhost:1800/api/';
    var dataFactory = {};

    // Get user list API
    dataFactory.getUserList = function () {
        return $http.get(urlBase + 'getall');
    };

    // Add new user API
    dataFactory.addUser = function (data) {
        return $http.post(urlBase + 'add', data)
    };

    // Update old user details API
    dataFactory.updateUser = function (id, data) {
        return $http.post(urlBase + 'update/' + id, data);
    };

    // Delete user details API
    dataFactory.deleteUser = function (id) {
        return $http.get(urlBase + 'delete/' + id);
    };

    return dataFactory;
}]);