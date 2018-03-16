angular.module('alurapic').controller('FotoController',function($scope, $resource, $routeParams, cadastroDeFotos) {
		    
			$scope.foto = {};
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
			
			if ($routeParams.fotoId) {
				$scope.foto = $scope.fotos[$routeParams.fotoId];
				/* 1º forma de buscar a foto no servidor
				$http.get('/v1/fotos/' + $routeParams.fotoId).success(
						function(foto) {
							$scope.foto = foto;
						}).error(function(erro) {
					console.log(erro);
					$scope.mensagem = 'Não foi possível obter a foto'
				});*/
				
				/* 2º forma de buscar a foto no servidor
				recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
	                $scope.foto = foto; 
	            }, function(erro) {
	                console.log(erro);
	                $scope.mensagem = 'Não foi possível obter a foto'
	            });
	           */
			} 
			
			$scope.submeter = function() {
				// console.log($scope.foto);
				
				if ($scope.formulario.$valid) {
					if($routeParams.fotoId) {
						$scope.mensagem = 'Foto ' + $scope.foto.titulo + ' foi alterada';
						
						/* 1º forma de altera foto no servidor usando $http
						
						$http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
	                    .success(function() {
	                        $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' foi alterada';

	                    })
	                    .error(function(erro) {
	                        console.log(erro);
	                        $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
	                    });
	                    
	                    */
						
						/* 2º forma de altera foto no servidor usando $resource
						 * 
					  	 recursoFoto.update({fotoId: $scope.foto._id}, 
		                        $scope.foto, function() {
		                        $scope.mensagem = 'Foto alterada com sucesso';
		                    }, function(erro) {
		                        console.log(erro);
		                        $scope.mensagem = 'Não foi possível alterar';
		                 });
		                 
			            */
					}else{
						$scope.mensagem = 'Foto cadastrada com sucesso!';
						
						/* 1º forma de salva foto no servidor usando $http
						   $http.post('/v1/fotos',$scope.foto).success(function() { 
						   		$scope.foto = {};
						   		$scope.mensagem = 'Foto cadastrada com sucesso!';
						   }).error(function(erro) { console.log(erro);
						   		$scope.mensagem = 'Não foi possivel cadastrar a foto'; 
						   })
						 */
						
						/* 2º forma de salva foto no servidor usando $resource
							recursoFoto.save($scope.foto, function() {
		                        $scope.foto = {};
		                        $scope.mensagem = 'Foto cadastrada com sucesso';
		                    }, function(erro) {
		                        console.log(erro);
		                        $scope.mensagem = 'Não foi possível cadastrar a foto';
		                    });
	                    */
					}
					
					/*
					 * 2º forma usando o serviço cadastroDeFotos.cadastrar
					 * assim é muito mais simples porque foi encapsulado no serviços
					cadastroDeFotos.cadastrar($scope.foto)
	                .then(function(dados) {
	                    $scope.mensagem = dados.mensagem;
	                    if (dados.inclusao) $scope.foto = {};
	                    //$scope.focado = true; 
	                })
	                .catch(function(erro) {
	                    $scope.mensagem = erro.mensagem;
	                });
	                
	                */

				}
			};


		});