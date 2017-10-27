angular.module('angularrails')
.factory('users', ['$http', function($http){
  var o = {
    users: []
  };
  o.auth = function(email, password) {
    var Indata = {"email":email, "password": password}
  		return $http({url: "http://localhost:3000/authenticate",
        method: "POST",
        params: Indata}).then(
  			function(data){
          console.log(data.data)
		      	angular.copy(data.data, o.users);
		    });
  	};
  return o;
}]);