angular.module('alurapic').controller('GruposController',function($scope, $http) {

			$scope.grupos = [ {
				_id : 1,
				nome : 'Animais',
			}, {
				_id : 2,
				nome : 'Esporte',
			}, {
				_id : 3,
				nome : 'Paisagem',
			},

			];
			/* buscar grupos do servidor
			$scope.grupos = [];
			
			$http.get('/v1/grupos').success(function(grupos) {
				$scope.grupos = grupos;
			}).error(function(erro) {
				console.log(erro);
			});
			*/
			
});