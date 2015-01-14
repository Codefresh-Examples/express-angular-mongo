/*eslint-env browser */

var expressAngular = angular.module('expressAngular', []);

function mainController($scope, $http) {
	$scope.loading = false;
	$scope.status = "";

	$scope.contacts = [];
	$scope.edit_flag = [];
	$scope.loadContacts = loadContacts = function() {
		$http.get('/api/contacts').
		success(function(data, status, headers, config) {
			$scope.contacts = data;
				var c = 0;
				for(i in data) {
					$scope.edit_flag[c] = false;
				}
		}).
		error(function(data, status, headers, config) {
			// do something
		});
	};


	// send form data
	$scope.contactSend = function() {
		$scope.loading = true;
		$http.post('/api/contact', {form_data:this.data}).
			success(function(data, status, headers, config) {
				$scope.loading = false;
				$scope.status = data.status;
				$scope.status_class = "bg-info";
				loadContacts();
			}).
			error(function(data, status, headers, config) {
				$scope.loading = false;
				$scope.status = "Error - " + data;
				$scope.status_class = "bg-danger";
			});
	};

	$scope.saveContact = function(index) {
		var contact = $scope.contacts[index];
		$scope.edit_flag[index] = false;
		$http.put('/api/contact' + contact._id, contact)
		.success(function(data) {
			loadContacts();
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};



	$scope.deleteContact = function(index) {

		var contact_id = $scope.contacts[index]._id;

		$http.delete('/api/contact' + contact_id)
		.success(function(data) {
			loadContacts();
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};



}
