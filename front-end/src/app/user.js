angular.module('angularrails')
.factory('users', ['$http', '$location', function($http, $location){
  var o = {
    items: ""
  };
  o.auth = function(email, password) {
    var Indata = {"email":email, "password": password}
  		return $http({url: "https://localhost:3000/authenticate",
        method: "POST",
        params: Indata}).then(
  			function(data){
         	window.localStorage.token = data.data.auth_token;
          $location.path('/userpage');
          console.log(window.localStorage.token);
		    });
  	};

    o.getItems = function(){
      return $http({
      method: 'GET', 
      url: 'https://localhost:3000/items',
      headers:{
          'Authorization': window.localStorage.token
      }
      });
    }
  return o;
}]);