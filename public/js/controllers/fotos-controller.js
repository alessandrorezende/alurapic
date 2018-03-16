angular.module('alurapic').controller('FotosController', function($scope, $resource) {

	var recursoFoto = $resource('/v1/fotos/:fotoId');
	$scope.filtro = '';
	$scope.mensagem = '';
	
	// Array em angular
	$scope.fotos = [ {
		_id : 0,
		titulo : 'Leão',
		url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
	}, {
		_id : 1,
		titulo : 'Urso',
		url : 'http://www.fundosanimais.com/Minis/urso.jpg'
	}, {
		_id : 2,
		titulo : 'Coelho',
		url : 'http://www.fundosanimais.com/Minis/coelho.jpg'
	},

	];
	
	
	
	/*
	 * 1º Requisição a um serviço de fotos
	
	var promise = $http.get('v1/fotos');
	promise.then(function(retorno){
		$scope.fotos = retorno.data;
	}).catch(function(error){
		console.log(error);
	});
	
	// 2º forma de reqisição a um serviço de fotos
	$http.get('v1/fotos').success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(erro){console.log(erro)})
	
	*/
	
	/*
	 * 2º Forma de fazer requisição a um serviço de fotos usando $resource
	recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro);
    });
    */
	
	$scope.remover = function(foto){
		 var indiceDaFoto = $scope.fotos.indexOf(foto);
         $scope.fotos.splice(indiceDaFoto, 1);
        
		 /*
		  *  1º Requisição a um serviço para deletar foto
		  * $http.delete('/v1/fotos/' + foto._id)
	        .success(function() {
	            console.log('Foto ' + foto.titulo + ' removida com sucesso!');
	            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';

	        })
	        .error(function(erro) {
	        	console.log(erro);
	            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
	        });
	     */
         
         /*
		  *  2º Forma de fazer requisição a um serviço para deletar foto usando $resource
         recursoFoto.delete({fotoId: foto._id}, function() {
             var indiceDaFoto = $scope.fotos.indexOf(foto);
             $scope.fotos.splice(indiceDaFoto, 1);
             $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
         }, function(erro) {
             console.log(erro);
             $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
         });
         */
	};
	
	
	
});